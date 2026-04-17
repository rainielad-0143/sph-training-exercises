export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-wrap">
      <span className="search-icon">⌕</span>
      <input
        type="text"
        placeholder="Search posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
