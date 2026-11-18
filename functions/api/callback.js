const cookieValue = (request, name) => {
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : '';
};

const clearStateCookie = 'decap_oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0';
const htmlResponse = (html, status = 200) => new Response(html, {
  status,
  headers: {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline';",
  },
});

function popupResult(status, payload) {
  const safePayload = JSON.stringify(payload).replace(/</g, '\\u003c');
  const statusLiteral = JSON.stringify(status);
  return `<!doctype html><html><head><meta charset="utf-8"><title>Autorización</title></head><body>
<script>
(() => {
  const status = ${statusLiteral};
  const payload = ${safePayload};
  const opener = window.opener;
  if (!opener) { document.body.textContent = 'No se encontró la ventana del panel. Cerrá esta ventana y volvé a intentar.'; return; }
  opener.postMessage('authorizing:github', '*');
  const receiveMessage = (message) => {
    if (!message.origin || message.origin !== window.location.origin) return;
    opener.postMessage('authorization:github:' + status + ':' + JSON.stringify(payload), message.origin);
    window.removeEventListener('message', receiveMessage, false);
    window.close();
  };
  window.addEventListener('message', receiveMessage, false);
})();
</script></body></html>`;
}

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const returnedState = url.searchParams.get('state') || '';
  const savedState = cookieValue(request, 'decap_oauth_state');

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return htmlResponse('Falta configurar el Client ID o Client Secret de GitHub en Cloudflare Pages.', 500);
  }
  if (url.searchParams.get('error')) {
    return htmlResponse(popupResult('error', { message: 'GitHub canceló o rechazó la autorización.' }), 400);
  }
  if (!code || !savedState || !returnedState || savedState !== returnedState) {
    return htmlResponse('La autorización no pudo validarse. Volvé al panel e intentá iniciar sesión nuevamente.', 400);
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'Miss-Sam-Portfolio-Decap-CMS',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    return htmlResponse(popupResult('error', { message: 'GitHub no pudo completar la autorización.' }), 401);
  }

  const html = popupResult('success', { token: tokenData.access_token, provider: 'github' });
  const response = htmlResponse(html);
  response.headers.append('Set-Cookie', clearStateCookie);
  return response;
}
