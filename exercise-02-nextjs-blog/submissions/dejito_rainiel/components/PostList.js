import PostCard from "./PostCard";
import styles from "@/styles/PostList.module.css";

export default function PostList({ posts }) {
  if (!posts.length) {
    return <p className={styles.noResults}>No posts found.</p>;
  }

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
