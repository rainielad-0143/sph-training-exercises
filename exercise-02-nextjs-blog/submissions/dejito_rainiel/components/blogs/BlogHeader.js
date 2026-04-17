import TagList from "./TagList";

export default function BlogHeader({ post, formatDate }) {
  return (
    <header>
      <div>
        <span>{formatDate(post.date)}</span>

        <TagList tags={post.tags} />
      </div>

      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </header>
  );
}
