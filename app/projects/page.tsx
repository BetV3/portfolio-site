import type { Metadata } from "next";
import Link from "next/link";
import { getAllContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description: "A collection of my web development projects and applications",
};

export default function ProjectsPage() {
  const projects = getAllContent("projects");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Projects
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A collection of things I&apos;ve built, from web applications to
            open-source tools and experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.frontmatter.title}
                  </h3>
                  {project.frontmatter.featured && (
                    <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {project.frontmatter.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.frontmatter.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <time dateTime={project.frontmatter.date}>
                    {new Date(project.frontmatter.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </time>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  View project
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
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="mt-12 rounded-lg border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              No projects yet. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
