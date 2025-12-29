import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  featured: boolean;
}

export interface ContentItem {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

const contentDirectory = path.join(process.cwd(), "content");

export function getContentDirectory(
  type: "projects" | "writing" | "tutorials"
) {
  return path.join(contentDirectory, type);
}

export function getAllContent(
  type: "projects" | "writing" | "tutorials"
): ContentItem[] {
  const dir = getContentDirectory(type);

  // Check if directory exists
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const content = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as Frontmatter,
      content,
    };
  });

  // Sort by date (newest first)
  return content.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
}

export function getContentBySlug(
  type: "projects" | "writing" | "tutorials",
  slug: string
): ContentItem | null {
  try {
    const dir = getContentDirectory(type);
    const filePath = path.join(dir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as Frontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(
  type: "projects" | "writing" | "tutorials"
): string[] {
  const dir = getContentDirectory(type);

  // Check if directory exists
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getFeaturedContent(
  type: "projects" | "writing" | "tutorials"
): ContentItem[] {
  const allContent = getAllContent(type);
  return allContent.filter((item) => item.frontmatter.featured);
}
