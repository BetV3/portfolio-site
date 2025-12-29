import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Portfolio",
  description: "Learn more about me, my background, and what I do",
};

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Leading frontend development for enterprise web applications using React and Next.js.",
    },
    {
      role: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description:
        "Built and maintained full-stack web applications using modern JavaScript technologies.",
    },
    {
      role: "Junior Developer",
      company: "Web Agency",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and learned the fundamentals of web development.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Developer, designer, and lifelong learner.
          </p>
        </div>

        {/* Bio */}
        <div className="mt-12 space-y-6 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            Hi, I&apos;m a web developer passionate about building exceptional
            digital experiences. I specialize in modern JavaScript frameworks
            and have a keen eye for design and user experience.
          </p>
          <p className="leading-relaxed">
            Over the years, I&apos;ve worked on a variety of projects ranging
            from small business websites to large-scale enterprise applications.
            I believe in writing clean, maintainable code and staying up-to-date
            with the latest web technologies.
          </p>
          <p className="leading-relaxed">
            When I&apos;m not coding, you can find me writing technical
            articles, contributing to open-source projects, or exploring new
            technologies and frameworks.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Skills & Technologies
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-zinc-300 before:content-[''] dark:before:bg-zinc-700"
              >
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-lg bg-zinc-50 p-8 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Let&apos;s Work Together
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:hello@example.com"
              className="rounded-md bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-zinc-300 bg-transparent px-6 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
