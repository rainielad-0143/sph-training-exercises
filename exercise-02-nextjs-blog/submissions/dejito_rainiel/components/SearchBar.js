import styles from "@/styles/SearchBar.module.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className={styles.searchWrap}>
      <span className={styles.searchIcon}>⌕</span>
      <input
        type="text"
        placeholder="Search posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
