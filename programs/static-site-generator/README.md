# Task 4: Static Site Generator CLI

Modern static site generator converting Markdown to optimized HTML with theming, asset pipeline, and deployment.

## Overview

A production-grade static site generator featuring:
- Markdown to HTML conversion
- Handlebars/EJS templating
- Theme system with CSS customization
- Asset optimization (minification, bundling)
- Live development server with hot reload
- SEO optimization
- RSS feed generation
- Syntax highlighting

## Features

✅ **Content Management**
- Markdown support with frontmatter
- Nested directory structure
- Automatic sitemap generation
- RSS feed generation
- Category/tag support

✅ **Theming**
- Multiple built-in themes
- Custom CSS variables
- Component system
- Responsive by default
- Dark mode support

✅ **Performance**
- Asset minification
- Image optimization
- CSS/JS bundling
- Lazy loading
- CDN-ready

✅ **CLI Commands**
```bash
ssg new <project-name>
ssg build [--watch]
ssg serve [--port 8000]
ssg new-page <name>
ssg new-theme <name>
ssg deploy [--provider vercel|netlify|github-pages]
```

## Tech Stack

- **Core**: Node.js, TypeScript
- **Markdown**: Marked.js
- **Templates**: Handlebars
- **Bundling**: Rollup/Vite
- **CLI**: Commander.js
- **Development**: Browsersync

## Installation

```bash
npm install -g @your-org/ssg
ssg --version
```

## Usage

```bash
# Create new site
ssg new my-blog
cd my-blog

# Development
ssg serve        # Runs on http://localhost:8000

# Build for production
ssg build
ssg build --watch

# Create content
ssg new-page "My First Post"

# Deploy
ssg deploy --provider vercel
```

## Project Structure

```
my-site/
├── content/
│   ├── pages/
│   └── posts/
├── themes/
│   └── default/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── dist/           (Generated)
└── config.js
```

## Metrics

- **Type**: CLI Program
- **Difficulty**: Intermediate
- **Real-world**: Production-ready SSG
- **Est. LOC**: 4,000+

Part of **Project Challenger 1: Web Development**
