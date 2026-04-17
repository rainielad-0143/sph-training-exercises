export default function TagList({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </>
  );
}
