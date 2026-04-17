import postsData from '../posts/posts.json';

export function getAllPosts() {
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return postsData.find((post) => post.slug === slug) || null;
}

export function getAllTags() {
  const tagSet = new Set();
  postsData.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
