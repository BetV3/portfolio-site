import type { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Writing - Portfolio",
  description:
    "Articles and thoughts on web development, design, and technology",
};

export default function WritingPage() {
  const articles = getAllContent("writing");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Writing
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Thoughts on software development, design, and the tech industry.
          </p>
        </div>

        {/* Articles List */}
        <div className="mt-12 space-y-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group block rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <article className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <time dateTime={article.frontmatter.date}>
                    {new Date(article.frontmatter.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </time>
                  {article.frontmatter.featured && (
                    <>
                      <span>•</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        Featured
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {article.frontmatter.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {article.frontmatter.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.frontmatter.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Read article
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 rounded-lg bg-zinc-50 p-8 dark:bg-zinc-900">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Stay Updated
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Get notified when I publish new articles. No spam, unsubscribe
              anytime.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
              <button
                type="submit"
                className="rounded-md bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
