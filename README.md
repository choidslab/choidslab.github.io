# choidslab.github.io

Personal academic website of **Doo-Seop Choi** — AI × Cybersecurity researcher
(Ph.D. in Computer Science, Hanyang University). Built as a lightweight static
site, structured like a research-lab homepage so it can later grow into the
DAIS Lab site.

Live at: <https://choidslab.github.io>

## Stack

- [Astro 7](https://astro.build) — static output, content collections (Content Layer API)
- Plain CSS with design tokens (light/dark theme, no CSS framework)
- No JS frameworks — only tiny inline scripts for the theme toggle and mobile menu
- Content is Markdown; publications/CV/research data are typed TypeScript files

## Development

```bash
npm install       # first time only
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Deployment: push to `main` → GitHub Actions builds and publishes to GitHub Pages.

## Structure

```
src/
├── config/site.ts        # SITE identity: name, tagline, emails, nav, socials
├── content/
│   ├── blog/             # blog posts (one .md per post)
│   └── news/             # news items (one .md per item)
├── content.config.ts     # collection schemas (blog, news)
├── data/
│   ├── publications.ts   # publication list (typed)
│   ├── research.ts       # research areas
│   └── cv.ts             # education, experience, certifications
├── layouts/Base.astro    # shared layout (head, header, footer, theme init)
├── components/           # Header, Footer, ThemeToggle
├── pages/                # one .astro file per route
└── styles/global.css     # design tokens + utility classes
public/img/               # static images (profile photo, post images)
```

## Posting

Add a Markdown file to `src/content/blog/` or `src/content/news/`, then
commit and push. See **[POSTING_GUIDE.md](./POSTING_GUIDE.md)** (Korean) for
frontmatter templates and the draft workflow.

## Changing site identity

All identity strings live in **`src/config/site.ts`** — site name, tagline,
emails, affiliation, social links, SEO description, and the navigation menu.
Nothing is hard-coded in pages, so rebranding (e.g., turning this into the
DAIS Lab site) means editing that single file:

- `siteName`, `tagline` — header, browser tab, hero
- `emails` — first entry is the primary contact address
- `nav` — add/remove menu items (create a matching file in `src/pages/`)
- `lab` — future lab branding (`useLabBranding` flag)
