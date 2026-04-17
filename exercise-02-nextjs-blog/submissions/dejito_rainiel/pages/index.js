import Head from "next/head";
import { useState } from "react";

import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import PostList from "../components/PostList";

import useFilteredPosts from "../hooks/useFilteredPosts";

import { getAllPosts, getAllTags } from "../lib/posts";

export default function Home({ posts, tags }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const filteredPosts = useFilteredPosts(posts, query, activeTag);

  return (
    <>
      <Head>
        <title>the.journal</title>
        <meta
          name="description"
          content="A personal blog on lifestyle, tech, books, and ideas."
        />
      </Head>

      <HeroSection />

      <div className="controls">
        <SearchBar query={query} setQuery={setQuery} />

        <TagFilter
          tags={tags}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      </div>

      <PostList posts={filteredPosts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return {
    props: { posts, tags },
  };
}
