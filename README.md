# sajadkhosravi.github.io

Personal portfolio of **Sajad Khosravi**: software engineer and PhD researcher in cloud, edge and distributed systems.
Live at <https://sajadkhosravi.github.io/>.

It's a static, single-page site built with [Hugo](https://gohugo.io/) and a custom theme (`themes/cv-one`).
There is no Node toolchain, no framework, no analytics, and no third-party requests at runtime. Fonts and icons are self-hosted.

## Quick start

Requirements: **Hugo extended ≥ 0.146** (CI uses 0.146.3).

```bash
brew install hugo          # macOS; see gohugo.io/installation for other platforms
hugo server                # http://localhost:1313, live reload
hugo --gc --minify         # production build into ./public
```

## Updating content

> **Step-by-step guide with copy-paste examples:** see [EDITING.md](EDITING.md).

All content lives in YAML files in `data/homepage/`. You never need to touch templates to update the site.

| File | Section | Notes |
| --- | --- | --- |
| `about.yaml` | Hero + About | Name, title, summary, key facts, bio paragraphs, email, profile links |
| `research.yaml` | (inside About) | Research interests |
| `languages.yaml` | (inside About) | Spoken languages |
| `projects.yaml` | Selected work | Most important section; see the field list at the top of the file |
| `skills.yaml` | Skills | Grouped lists, no proficiency bars |
| `experience.yaml` | Experience | Newest first; optional `description` and `highlights` |
| `teaching.yaml` | Teaching | Grouped by institution automatically |
| `volunteer.yaml` | Service | |
| `publications.yaml` | Publications | `self` sets the author name to highlight |
| `education.yaml` | Education | |
| `contact.yaml` | Contact | Heading and short text; links come from `about.yaml` |
| `awards.yaml` | Awards | Disabled until filled with verified entries |

How sections behave:

- **Order:** sections render in ascending `weight`.
- **Visibility:** `enable: false` hides a section. Sections with no items are hidden automatically.
- **Navigation:** a section appears in the top navigation when it has a `nav:` label. The nav is generated from the same list as the page, so it can't link to a hidden section.
- **New section types:** create `data/homepage/<id>.yaml` with a matching template at `themes/cv-one/layouts/_partials/sections/<id>.html`.

Other settings are in `hugo.toml`:

- **SEO:** `seo_title` and `description` control the page title, meta description and social previews.
- **Portrait:** `photo` is a path under `assets/`. Hugo generates WebP/JPEG sizes at build time, so you can drop in a large original.
- **Résumé:** replace `static/papers/cv.pdf` with your real CV, then set `[params.resume] enabled = true`. This adds a résumé button to the hero and a link in the contact section.

Printing the page (Ctrl/Cmd + P) produces a clean single-column CV layout.

## Deployment (GitHub Pages)

`.github/workflows/hugo.yml` builds the site on every push to `main` and deploys it with the official Pages actions. Pull requests are built as a check but not deployed. The build runs with `--panicOnWarning`, so template problems fail CI instead of shipping.

One-time repository setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The base URL is injected by `actions/configure-pages`, and all internal URLs are relative (`relURL`). The site therefore also works under a project path (`user.github.io/repo/`) or a custom domain without code changes. For a custom domain, add `static/CNAME` containing the domain and update `baseURL` in `hugo.toml`.

## Project structure

```
data/homepage/            content (YAML)
assets/images/            source images (processed by Hugo, not copied as-is)
static/                   copied verbatim: favicons, robots.txt, papers/
themes/cv-one/
  assets/css/main.css     all styles (design tokens at the top; light + dark themes)
  assets/js/main.js       progressive enhancement: theme toggle, active nav, copy e-mail
  layouts/                baseof, index, 404 + partials (hero, sections/*, icons, timeline)
  static/fonts/           IBM Plex Sans/Mono, latin subset (woff2) + OFL.txt
.github/workflows/        GitHub Pages build & deploy
```

## Accessibility & performance notes

- Semantic landmarks, a skip link, a single `h1`, and visible focus styles. All interactive elements are reachable by keyboard.
- Colour contrast meets WCAG 2.2 AA in both themes (minimum 5.3:1 for body text).
- `prefers-reduced-motion` disables animation and smooth scrolling. `prefers-color-scheme` picks the initial theme, and a manual toggle is remembered locally.
- Works without JavaScript; only the theme toggle and copy button need it, and they stay hidden without JS.
- No external requests: fonts are self-hosted and preloaded, and images are resized with explicit dimensions (no layout shift).

## Licensing

- **Code** (templates, CSS, JS, configuration) is licensed under the [MIT License](LICENSE).
- **Personal content** (text in `data/`, the portrait images in `assets/images/`, and documents in `static/papers/`) is © Sajad Khosravi, all rights reserved. It is not covered by the MIT license.
- **Third-party assets** are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
