import styles from "@/styles/TagFilter.module.css";

export default function TagFilter({ tags, activeTag, setActiveTag }) {
  return (
    <div className={styles.tagFilters}>
      <button
        className={`${styles.tagBtn} ${activeTag === "" ? styles.active : ""}`}
        onClick={() => setActiveTag("")}
      >
        All
      </button>

      {tags.map((t) => (
        <button
          key={t}
          className={`${styles.tagBtn} ${activeTag === t ? styles.active : ""}`}
          onClick={() => setActiveTag(t === activeTag ? "" : t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
