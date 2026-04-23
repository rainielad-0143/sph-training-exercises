import Link from "next/link";
import styles from "@/styles/PostCard.module.css";
import { splitDate } from "../lib/utils/date";

export default function PostCard({ post }) {
  const { month, day, year } = splitDate(post.date);

  return (
    <Link href={`/blog/${post.slug}`} className={styles.postCard}>
      <div className={styles.dateCol}>
        <span className={styles.month}>{month}</span>
        <span className={styles.day}>{day}</span>
        <span className={styles.year}>{year}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tagPill}>
              {tag}
            </span>
          ))}
        </div>

        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.desc}>{post.description}</p>
      </div>
    </Link>
  );
}
