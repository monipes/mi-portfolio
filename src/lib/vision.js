const entries = Object.entries(import.meta.glob('../content/vision-alternativa/*.md', { eager: true }));

const publishInstant = (value) => {
  if (!value) return null;
  const raw = String(value).trim().replace(/^['"]|['"]$/g, '');
  if (!raw) return null;
  // Decap's local datetime picker stores a timezone-free value. Interpret it as Argentina (UTC-3).
  const hasZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(raw);
  const parsed = Date.parse(hasZone ? raw : `${raw}-03:00`);
  return Number.isFinite(parsed) ? parsed : null;
};

export const readingTime = (post) => {
  const manual = Number(post.reading_time_manual);
  if (Number.isFinite(manual) && manual > 0) return Math.max(1, Math.round(manual));
  const text = String(post.body_es || '').replace(/<[^>]*>/g, ' ');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 250));
};

export const visionArticles = () => entries
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace(/\.md$/, ''),
    ...mod.frontmatter,
  }))
  .filter((post) => {
    if (post.published === false) return false;
    const scheduled = publishInstant(post.publish_at);
    return !scheduled || scheduled <= Date.now();
  })
  .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
