import Head from "next/head";

import BackButton from "@/components/blogs/BackButton";
import BlogHeader from "@/components/blogs/BlogHeader";
import BlogContent from "@/components/blogs/BlogContent";

import { getAllPosts, getPostBySlug, formatDate } from "../../lib/posts";

export default function BlogDetail({ post }) {
  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <Head>
        <title>{post.title} — the.journal</title>
        <meta name="description" content={post.description} />
      </Head>

      <article>
        <BackButton />

        <BlogHeader post={post} formatDate={formatDate} />

        <BlogContent content={post.content} />
      </article>
    </>
  );
}

export function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: { post: post || null },
  };
}
