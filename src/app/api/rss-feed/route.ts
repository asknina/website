import { NextResponse } from "next/server";
// using Parser to parse substack RSS feed
import Parser from "rss-parser";
export const runtime = 'nodejs'

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://askninaai.substack.com/feed");

    const anamitafeed = await parser.parseURL(
      "https://anamita.substack.com/feed"
    );

    //formatting for post

    // only returning the women history post in Anamita's substack
    const womensHistoryPost = anamitafeed.items
      .filter(
        (item) => item.title && item.title.includes("Women's History is Now")
      )
      .map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        content: item.content,
        author: item.creator,
        guid: item.guid,
      }));

    // formating for asknina ai blog post
    const askNinaPosts = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet,
      content: item.content,
      author: item.creator,
      guid: item.guid,
    }));

    // combine women's hsitory post and all ask nina ai post
    const allPosts = [...womensHistoryPost, ...askNinaPosts];

    return NextResponse.json({
      success: true,
      posts: allPosts.slice(0, 10),
    });
  } catch (error) {
    console.error("rss feed fetch error", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}
