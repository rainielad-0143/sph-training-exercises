import Link from "next/link";
import { splitDate } from "../lib/utils/date";

export default function PostCard({ post }) {
  const { month, day, year } = splitDate(post.date);

  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <div className="post-card__date-col">
        <span className="post-card__month">{month}</span>
        <span className="post-card__day">{day}</span>
        <span className="post-card__year">{year}</span>
      </div>

      <div className="post-card__body">
        <div className="post-card__tags">
          {post.tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>

        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__desc">{post.description}</p>
      </div>
    </Link>
  );
}
