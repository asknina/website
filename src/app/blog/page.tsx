import React from "react";
import type { Metadata } from "next";
import BlogList from "./components/BlogList";

export const metadata: Metadata = {
  title: "Ask Nina AI | Blog",
  description:
    "Stay updated with the latest insights, stories, and resources about STEM careers for teen girls from Ask Nina AI.",
};

const BlogPage = () => {
  return (
    <div>
      <BlogList />
    </div>
  );
};

export default BlogPage;
