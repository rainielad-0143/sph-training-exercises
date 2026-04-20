import TagList from "./TagList";
import styles from "@/styles/BlogHeader.module.css";

export default function BlogHeader({ post, formatDate }) {
  return (
    <header className={styles.header}>
      <div className={styles.tags}>
        <span>{formatDate(post.date)}</span>

        <TagList tags={post.tags} />
      </div>

      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </header>
  );
}
