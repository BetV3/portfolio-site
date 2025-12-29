# Content Templates

This directory contains templates for creating new content. Each template provides a structured format with all the necessary sections.

## Available Templates

### `project.mdx`

Template for documenting projects with sections:

- **Problem**: The challenge or pain point addressed
- **Solution**: Your approach to solving it
- **Architecture**: Technical design and implementation details
- **Reliability & Security**: How the system ensures uptime and data protection
- **Metrics**: Quantifiable results and performance data
- **What I Learned**: Key takeaways and lessons
- **Links**: Live demo, source code, and documentation

**Use for**: Completed projects, case studies, portfolio pieces

### `post.mdx`

Template for technical writing and decision-making posts:

- **Quick Summary**: 3-bullet executive summary
- **Context**: Background and requirements
- **The Decision**: Options considered and the choice made
- **Tradeoffs**: What was gained vs. what was given up
- **Takeaways**: Lessons and broader insights

**Use for**: Technical decisions, architecture discussions, experience reports

### `tutorial.mdx`

Template for step-by-step technical tutorials:

- **Goal**: What readers will build and learn
- **Architecture**: System design and technology stack
- **Prerequisites**: Required knowledge and tools
- **Steps**: Detailed implementation guide
- **Verification**: How to test the complete system
- **Failure Test/Recovery**: Common issues and debugging
- **Monitoring Notes**: Observability and alerting
- **Tradeoffs**: Simplifications and production considerations

**Use for**: How-to guides, walkthroughs, educational content

## Usage

1. Copy the appropriate template from `templates/` to the correct content directory:

   ```bash
   # For a new project
   cp templates/project.mdx content/projects/my-new-project.mdx

   # For a new post
   cp templates/post.mdx content/writing/my-technical-decision.mdx

   # For a new tutorial
   cp templates/tutorial.mdx content/tutorials/building-something.mdx
   ```

2. Update the frontmatter:
   - Set a descriptive `title`
   - Update the `date` to today
   - Write a compelling `summary`
   - Add relevant `tags`
   - Set `featured: true` for important content

3. Fill in each section with your content

4. Remove any sections that don&apos;t apply (keep the structure relevant)

5. The content will automatically appear on your site!

## Frontmatter Fields

All templates use the same frontmatter structure:

```yaml
---
title: "Your Title Here"
date: "2024-01-01"
summary: "A one-sentence description for lists and SEO"
tags: ["tag1", "tag2", "tag3"]
featured: false # Set to true to highlight this content
---
```

## Tips

- **Be specific**: Concrete examples are more valuable than vague descriptions
- **Show, don&apos;t tell**: Use code examples, metrics, and real data
- **Think about the reader**: What would help someone in a similar situation?
- **Use proper Markdown**: Headings, lists, code blocks, and links
- **Keep it scannable**: Use clear headings and formatting
- **Update dates**: Keep the frontmatter date current when making major updates

## Content Guidelines

- **Projects**: Focus on impact, decisions, and learnings
- **Posts**: Emphasize context, reasoning, and tradeoffs
- **Tutorials**: Prioritize clarity, completeness, and reproducibility
