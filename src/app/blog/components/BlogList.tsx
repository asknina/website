"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/body/Container";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  content: string;
  author: string;
  guid: string;
}

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/rss-feed");
        // Check if the fetching resposne failure throw error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        //
        const data = await response.json();

        if (data.success) {
          setPosts(data.posts);
        } else {
          setError("Error fetching blog posts");
        }
      } catch (err) {
        setError("Failed to load blog posts");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container containerStyles="p-16 md:p-24 pt-16 bg-gray-100 z-0 items-center flex flex-col">
      <div className="text-5xl md:text-6xl mb-10 text-center max-w-screen-lg font-semibold font-display text-primaryPurple">
        Ask Nina AI Blog
      </div>

      <a href=""></a>
      <div className="text-xl text-center max-w-screen-md mb-8">
        Stay updated with the latest insights from the Ask Nina AI team—from the
        state of women in stem to tech tutorials and more!
      </div>

      {/* Subscribe Button */}
      <div className="mb-12">
        <a
          href="https://askninaai.substack.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primaryPink text-white rounded-md py-3 px-6 text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Subscribe
        </a>
      </div>

      <div className="max-w-screen-lg w-full">
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryPurple mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Unable to load blog posts
            </h3>
            <p className="text-red-500">{error}. Please try again later.</p>
          </div>
        )}

        {!loading && !error && posts && posts.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
            <h2 className="text-2xl font-semibold text-primaryPurple mb-4">
              No posts available
            </h2>
            <p className="text-gray-600">Check back soon for new blog posts!</p>
          </div>
        )}

        {!loading && !error && posts && posts.length > 0 && (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={post.guid || index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-primaryPurple mb-2 md:mb-0 flex-1">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-bgPurple transition-colors"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <div className="text-sm text-gray-500 md:ml-4 md:text-right">
                    <div>By {post.author}</div>
                    <div>{formatDate(post.pubDate)}</div>
                  </div>
                </div>

                <div className="text-gray-700 mb-4">{post.contentSnippet}</div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primaryPurple text-white rounded-md py-2 px-4 hover:bg-bgPurple transition-colors"
                >
                  Read More →
                </a>
              </article>
            ))}
          </div>
        )}

        <div className="bg-pink-50 border-2 border-primaryPink rounded-lg p-6 text-center mt-8">
          <h3 className="text-xl font-semibold text-primaryPurple mb-2">
            Can’t get enough of the latest?
          </h3>
          <p className="text-gray-700 mb-4">
            Tap into our Substack for all things Women X STEM
          </p>
          <a
            className="bg-primaryPurple text-white rounded-md py-2 px-4 hover:bg-bgPurple transition-colors"
            href="https://anamita.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unlock More
          </a>
        </div>
      </div>
    </Container>
  );
};

export default BlogList;
