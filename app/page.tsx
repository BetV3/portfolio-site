import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-zinc-600 dark:text-zinc-400">
                a developer
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              I build exceptional digital experiences for the web.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Welcome to my portfolio. Here you&apos;ll find my projects, writing,
            and tutorials on web development, design, and everything in between.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-zinc-300 bg-transparent px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="mt-24 space-y-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Featured Content
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            <Link
              href="/projects"
              className="group space-y-3 rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Projects
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                A collection of work I&apos;ve built, ranging from web
                applications to open-source tools.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                View all projects
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

            <Link
              href="/writing"
              className="group space-y-3 rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Writing
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Thoughts on software development, design, and the tech industry.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Read articles
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

            <Link
              href="/tutorials"
              className="group space-y-3 rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Tutorials
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Step-by-step guides and code walkthroughs to help you learn.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Browse tutorials
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

            <Link
              href="/about"
              className="group space-y-3 rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                About
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Learn more about me, my background, and what I&apos;m currently
                working on.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                More about me
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
          </div>
        </div>
      </div>
    </div>
  );
}
