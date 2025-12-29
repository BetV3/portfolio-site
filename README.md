# Portfolio Site

A modern, performant portfolio website built with Next.js 16, React 19, and TypeScript.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## Prerequisites

- Node.js 20.18.1 (specified in `.nvmrc`)
- npm (comes with Node.js)

If you use [nvm](https://github.com/nvm-sh/nvm), you can run:

```bash
nvm use
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser. The page auto-updates as you edit files.

### Building for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without making changes

## Code Quality

This project uses:

- **ESLint** with Next.js recommended config for code linting
- **Prettier** for consistent code formatting
- **TypeScript** for type safety

Run linting and formatting before committing:

```bash
npm run lint
npm run format
```

## Project Structure

```
portfolio-site/
├── app/                      # Next.js App Router pages and layouts
│   ├── components/          # Shared components (Nav, Footer)
│   ├── projects/            # Projects pages
│   │   ├── page.tsx        # Projects list
│   │   └── [slug]/         # Individual project pages
│   ├── writing/            # Writing/blog pages
│   │   ├── page.tsx        # Articles list
│   │   └── [slug]/         # Individual article pages
│   ├── tutorials/          # Tutorial pages
│   │   ├── page.tsx        # Tutorials list
│   │   └── [slug]/         # Individual tutorial pages
│   ├── about/              # About page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── content/                 # MDX content files
│   ├── projects/           # Project MDX files
│   ├── writing/            # Article MDX files
│   └── tutorials/          # Tutorial MDX files
├── templates/              # Content templates
│   ├── project.mdx        # Project template
│   ├── post.mdx           # Blog post template
│   └── tutorial.mdx       # Tutorial template
├── lib/                    # Utility functions
│   └── mdx.ts             # MDX parsing utilities
├── public/                 # Static assets
├── .nvmrc                  # Node version specification
├── eslint.config.mjs       # ESLint configuration
├── .prettierrc             # Prettier configuration
├── mdx-components.tsx      # MDX component overrides
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Content Management

This portfolio uses MDX for content management. All content lives in the `content/` directory.

### Creating New Content

Use the templates in `templates/` to create new content:

```bash
# Create a new project
cp templates/project.mdx content/projects/my-project.mdx

# Create a new article
cp templates/post.mdx content/writing/my-article.mdx

# Create a new tutorial
cp templates/tutorial.mdx content/tutorials/my-tutorial.mdx
```

### Frontmatter

Each MDX file requires frontmatter:

```yaml
---
title: "Your Title"
date: "2024-01-01"
summary: "Brief description"
tags: ["tag1", "tag2"]
featured: true # Highlight this content
---
```

### Content Routes

- `/projects` - All projects
- `/projects/[slug]` - Individual project
- `/writing` - All articles
- `/writing/[slug]` - Individual article
- `/tutorials` - All tutorials
- `/tutorials/[slug]` - Individual tutorial

See `templates/README.md` for detailed usage instructions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new), the platform from the creators of Next.js.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other deployment options.
