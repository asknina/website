import { NextResponse } from "next/server";

// Simple XML parser for RSS feeds
function parseXMLTag(xml: string, tagName: string, startIndex: number = 0): { content: string; nextIndex: number } | null {
  const openTag = `<${tagName}`;
  const closeTag = `</${tagName}>`;

  const start = xml.indexOf(openTag, startIndex);
  if (start === -1) return null;

  const contentStart = xml.indexOf('>', start) + 1;
  const end = xml.indexOf(closeTag, contentStart);

  if (end === -1) return null;

  let content = xml.slice(contentStart, end).trim();

  // Remove CDATA wrapper if present
  if (content.startsWith('<![CDATA[') && content.endsWith(']]>')) {
    content = content.slice(9, -3);
  }

  // Decode HTML entities
  content = content
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  return {
    content,
    nextIndex: end + closeTag.length
  };
}

function extractAllTags(xml: string, tagName: string): string[] {
  const results: string[] = [];
  let currentIndex = 0;

  while (true) {
    const result = parseXMLTag(xml, tagName, currentIndex);
    if (!result) break;

    results.push(result.content);
    currentIndex = result.nextIndex;
  }

  return results;
}

function parseRSSItem(itemXML: string) {
  const getTagContent = (tagName: string): string => {
    const result = parseXMLTag(itemXML, tagName);
    return result ? result.content : '';
  };

  return {
    title: getTagContent('title'),
    link: getTagContent('link'),
    pubDate: getTagContent('pubDate'),
    contentSnippet: getTagContent('description'),
    content: getTagContent('content:encoded') || getTagContent('description'),
    author: getTagContent('dc:creator') || getTagContent('author') || 'Unknown',
    guid: getTagContent('guid') || getTagContent('link'),
  };
}

async function parseRSSFeed(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();

    // Extract all <item> sections
    const items: any[] = [];
    let currentIndex = 0;

    while (true) {
      const itemStart = xmlText.indexOf('<item', currentIndex);
      if (itemStart === -1) break;

      const itemEnd = xmlText.indexOf('</item>', itemStart);
      if (itemEnd === -1) break;

      const itemXML = xmlText.slice(itemStart, itemEnd + 7);
      const parsedItem = parseRSSItem(itemXML);

      // Only add if we have at least a title or link
      if (parsedItem.title || parsedItem.link) {
        items.push(parsedItem);
      }

      currentIndex = itemEnd + 7;
    }

    return { items };
  } catch (error) {
    console.error(`Failed to parse RSS feed ${url}:`, error);
    return { items: [] };
  }
}

export async function GET() {
  try {
    // Fetch both RSS feeds in parallel
    const [askNinaFeed, anamitaFeed] = await Promise.allSettled([
      parseRSSFeed("https://askninaai.substack.com/feed"),
      parseRSSFeed("https://anamita.substack.com/feed")
    ]);

    let askNinaPosts: any[] = [];
    let womensHistoryPost: any[] = [];

    // Handle Ask Nina AI feed
    if (askNinaFeed.status === 'fulfilled' && askNinaFeed.value.items) {
      askNinaPosts = askNinaFeed.value.items.map((item: any, index: number) => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: item.contentSnippet || '',
        content: item.content || '',
        author: item.author === 'Unknown' ? 'Ask Nina AI' : item.author,
        guid: item.guid || item.link || `asknina-${Date.now()}-${index}`,
      }));
    } else {
      console.warn("Failed to fetch Ask Nina AI feed");
    }

    // Handle Anamita feed - only returning the women's history posts
    if (anamitaFeed.status === 'fulfilled' && anamitaFeed.value.items) {
      womensHistoryPost = anamitaFeed.value.items
        .filter((item: any) =>
          item.title &&
          typeof item.title === 'string' &&
          item.title.toLowerCase().includes("women's history is now")
        )
        .map((item: any, index: number) => ({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || new Date().toISOString(),
          contentSnippet: item.contentSnippet || '',
          content: item.content || '',
          author: item.author === 'Unknown' ? 'Anamita' : item.author,
          guid: item.guid || item.link || `anamita-${Date.now()}-${index}`,
        }));
    } else {
      console.warn("Failed to fetch Anamita feed");
    }

    // Combine women's history posts and all Ask Nina AI posts
    const allPosts = [...womensHistoryPost, ...askNinaPosts];

    // Sort by publication date (newest first)
    allPosts.sort((a, b) => {
      try {
        const dateA = new Date(a.pubDate);
        const dateB = new Date(b.pubDate);
        return dateB.getTime() - dateA.getTime();
      } catch {
        return 0;
      }
    });

    return NextResponse.json({
      success: true,
      posts: allPosts.slice(0, 10),
      totalFetched: allPosts.length,
    });

  } catch (error) {
    console.error("RSS feed fetch error:", error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch RSS feed",
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// Use edge runtime for better compatibility with Cloudflare Workers
export const runtime = 'nodejs';