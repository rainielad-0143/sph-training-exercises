import styles from "@/styles/PostCard.module.css";

export default function TagList({ tags }) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tagPill}>
          {tag}
        </span>
      ))}
    </div>
  );
}
