export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname.toLowerCase() === 'www.misssam.online') {
    url.hostname = 'misssam.online';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
