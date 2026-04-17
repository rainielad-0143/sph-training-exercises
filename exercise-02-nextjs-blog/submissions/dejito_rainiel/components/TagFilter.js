export default function TagFilter({ tags, activeTag, setActiveTag }) {
  return (
    <div className="tag-filters">
      <button
        className={`tag-btn${activeTag === "" ? " active" : ""}`}
        onClick={() => setActiveTag("")}
      >
        All
      </button>

      {tags.map((t) => (
        <button
          key={t}
          className={`tag-btn${activeTag === t ? " active" : ""}`}
          onClick={() => setActiveTag(t === activeTag ? "" : t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
