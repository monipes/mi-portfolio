const entries = Object.entries(import.meta.glob('../content/vision-alternativa/*.md', { eager: true }));

export const visionArticles = () => {
  const now = Date.now();
  return entries
    .map(([path, mod]) => ({ slug: path.split('/').pop().replace(/\.md$/, ''), ...mod.frontmatter }))
    .filter((post) => post.published !== false && (!post.publish_at || new Date(post.publish_at).getTime() <= now))
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
};

export const readingMinutes = (post) => {
  if (Number(post.reading_time) > 0) return Number(post.reading_time);
  const body = String(post.body_es || '');
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};
