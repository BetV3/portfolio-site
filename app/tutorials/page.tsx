import type { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Tutorials - Portfolio",
  description: "Step-by-step guides and code walkthroughs for web developers",
};

export default function TutorialsPage() {
  const tutorials = getAllContent("tutorials");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Tutorials
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Step-by-step guides and code walkthroughs to help you learn and
            build better software.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["All", "React", "Next.js", "Node.js", "CSS"].map((tag) => (
            <button
              key={tag}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tag === "All"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="group flex flex-col rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  {tutorial.frontmatter.featured && (
                    <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                      Featured
                    </span>
                  )}
                  <time
                    dateTime={tutorial.frontmatter.date}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {new Date(tutorial.frontmatter.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                      }
                    )}
                  </time>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {tutorial.frontmatter.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {tutorial.frontmatter.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tutorial.frontmatter.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Start tutorial
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
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-lg border border-zinc-200 p-8 text-center dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Request a Tutorial
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Have a topic you&apos;d like to see covered? Let me know!
          </p>
          <button className="mt-4 rounded-md bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
            Suggest a Topic
          </button>
        </div>
      </div>
    </div>
  );
}
