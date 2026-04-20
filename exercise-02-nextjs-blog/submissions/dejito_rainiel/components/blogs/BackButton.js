import Link from "next/link";

import styles from "@/styles/BackButton.module.css";

export default function BackButton() {
  return (
    <Link href="/" className={styles.btn}>
      ← Back to all posts
    </Link>
  );
}
