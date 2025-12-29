import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getContentBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = getAllSlugs("writing");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getContentBySlug("writing", slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.frontmatter.title} - Writing`,
    description: article.frontmatter.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getContentBySlug("writing", slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back Link */}
        <Link
          href="/writing"
          className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Writing
        </Link>

        {/* Header */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            {article.frontmatter.featured && (
              <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                Featured
              </span>
            )}
            <time
              dateTime={article.frontmatter.date}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            {article.frontmatter.title}
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            {article.frontmatter.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {article.frontmatter.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-zinc mt-12 dark:prose-invert prose-headings:font-bold prose-a:text-zinc-900 prose-a:no-underline prose-a:decoration-zinc-300 prose-a:underline-offset-4 hover:prose-a:decoration-zinc-500 dark:prose-a:text-zinc-100 dark:prose-a:decoration-zinc-700 dark:hover:prose-a:decoration-zinc-500">
          <MDXRemote source={article.content} />
        </article>
      </div>
    </div>
  );
}
