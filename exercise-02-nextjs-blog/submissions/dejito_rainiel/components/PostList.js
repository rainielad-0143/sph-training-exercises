import PostCard from "./PostCard";

export default function PostList({ posts }) {
  if (!posts.length) {
    return <p className="no-results">No posts found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
