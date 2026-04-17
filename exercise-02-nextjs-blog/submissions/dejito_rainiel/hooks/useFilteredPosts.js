import { useMemo } from "react";

export default function useFilteredPosts(posts, query, activeTag) {
  return useMemo(() => {
    return posts.filter((p) => {
      const matchesTag = activeTag ? p.tags.includes(activeTag) : true;

      const matchesQuery = query
        ? p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
        : true;

      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);
}
