const entries = Object.entries(import.meta.glob('../content/vision-alternativa/*.md', { eager: true }));

const scheduledTimestamp = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value.getTime();
  const raw = String(value).trim();
  const hasTimezone = /(?:Z|[+-]\\d{2}:?\\d{2})$/i.test(raw);
  const normalized = hasTimezone ? raw : `${raw}-03:00`;
  const timestamp = Date.parse(normalized);
  return Number.isFinite(timestamp) ? timestamp : null;
};

export const visionArticles = () => {
  const now = Date.now();
  return entries
    .map(([path, mod]) => ({ slug: path.split('/').pop().replace(/\.md$/, ''), ...mod.frontmatter }))
    .filter((post) => {
      if (post.published === false) return false;
      // Los artículos programados no aparecen antes de su fecha y hora local.
      if (post.publish_at) {
        const scheduled = scheduledTimestamp(post.publish_at);
        if (scheduled === null || scheduled > now) return false;
      }
      // Evita tarjetas vacías o incompletas en la sección pública.
      return Boolean(post.title_es && post.image && post.excerpt_es && post.body_es);
    })
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
};

export const readingMinutes = (post) => {
  if (Number(post.reading_time) > 0) return Number(post.reading_time);
  const body = String(post.body_es || '');
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};
