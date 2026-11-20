const entries = Object.entries(import.meta.glob('../content/vision-alternativa/*.md', { eager: true }));

export const visionArticles = () => entries
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace(/\.md$/, ''),
    ...mod.frontmatter,
  }))
  .filter((post) => post.published !== false)
  .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
