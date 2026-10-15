# How to update the website

All the text on the site lives in a few YAML files in **`data/homepage/`**. You edit those, check the result locally, and push. You never need to touch HTML, CSS or the theme.

---

## The 3-step routine

**1. Preview while you edit**

```bash
cd sajadkhosravi.github.io
hugo server
```

Open <http://localhost:1313>. Every time you save a file, the page refreshes by itself. Stop the server with `Ctrl + C`.

**2. Edit a file** in `data/homepage/` (see "Where everything is" below).

**3. Publish**

```bash
git add -A
git commit -m "Update experience"
git push
```

GitHub builds and deploys the site automatically. It's live in about 1–2 minutes; you can follow the progress in the repo's **Actions** tab. If the build fails there, nothing changes on the live site, so a mistake can't take it down.

---

## Where everything is

| What you see on the site | File |
| --- | --- |
| Name, title, intro text, buttons, facts next to the photo | `about.yaml` (top part) |
| About section paragraphs | `about.yaml` → `bio` |
| GitHub / LinkedIn / email links (used everywhere) | `about.yaml` → `social_links`, `email` |
| "Technical focus" list in About | `research.yaml` |
| Spoken languages in About | `languages.yaml` |
| Experience | `experience.yaml` |
| Skills | `skills.yaml` |
| Projects | `projects.yaml` |
| Education | `education.yaml` |
| Publications | `publications.yaml` |
| Teaching | `teaching.yaml` |
| Service | `volunteer.yaml` |
| Awards (currently hidden) | `awards.yaml` |
| Contact section text | `contact.yaml` |
| Browser tab title, Google / LinkedIn preview text, résumé button | `hugo.toml` (project root) |
| Photo | `assets/images/profile.png` |
| Résumé PDF | `static/papers/cv.pdf` |

---

## Common tasks (copy, paste, edit)

### Add a job, or describe an existing one

In `experience.yaml`, newest job first. Only `title`, `organization` and `period` are required.

```yaml
  - title: "Software Engineer"
    organization: "Company Name"
    location: "Stockholm, Sweden"
    period: "Jan 2027 – Present"
    description: "One sentence on what the team does and what you worked on."
    highlights:
      - "Built X, which let the team do Y."
      - "Cut the time for Z from hours to minutes."
```

Tip: a highlight is strongest when it names **what you built** and **what changed because of it**.

### Add a project

In `projects.yaml`, put your best project **first**. Only `title` and `summary` are required.

```yaml
  - title: "Distributed task queue in Rust"
    kind: "Open source"            # small label above the title
    period: "2026"
    summary: "One or two plain sentences: what it is and why it's interesting."
    problem: "Optional: what was hard or broken."
    approach: "Optional: how you solved it."
    outcome: "Optional: the result."
    role: "Optional: what you did, if it was a team project."
    tags: ["Rust", "gRPC", "Kubernetes"]
    links:
      - label: "Code"
        url: "https://github.com/sajadkhosravi/your-repo"
      - label: "Demo"
        url: "https://example.com"
```

A project that has any of `problem` / `approach` / `outcome` / `role` is shown as a full-width card. Projects without them are shown side by side in a smaller size.

### Add or change skills

In `skills.yaml`, each group is a name plus a list:

```yaml
  - name: "Languages"
    skills: ["Python", "Java", "C++", "Rust", "Go"]
```

### Add a publication

In `publications.yaml`, newest first:

```yaml
  - title: "Paper title"
    authors: ["Sajad Khosravi", "Co-Author One", "Co-Author Two"]
    venue: "Conference or journal name (ABC 2027)"
    year: "2027"
    type: "conference"          # conference | journal | workshop | preprint
    doi: "10.1109/xxxxx"        # optional; makes the title a link
    pdf: "papers/my-paper.pdf"  # optional; put the file in static/papers/
    code: "https://github.com/..."  # optional
```

Your name is highlighted automatically.

### Add education or a teaching course

`education.yaml`:

```yaml
  - degree: "MSc in ..."
    institution: "University"
    location: "City, Country"
    period: "Sep 2018 – Feb 2022"
    thesis: "Optional"
    supervisor: "Optional"
```

`teaching.yaml` (courses are grouped by `institution` automatically):

```yaml
  - course: "Course name"
    code: "TDDXXX"          # optional
    institution: "Linköping University"
    period: "Sep 2026 – Present"
```

### Change the intro text or the facts next to the photo

In `about.yaml`, edit `title`, `focus` (the small line above your name) and `summary`. The `facts` list is label/value pairs:

```yaml
facts:
  - label: "Work permit"
    value: "Sweden / EU"
```

### Turn on the résumé download button

1. Replace `static/papers/cv.pdf` with your real résumé (keep the file name).
2. In `hugo.toml`, set:

```toml
  [params.resume]
    enabled = true
```

A résumé button then appears in the top section and in Contact.

### Change the photo

Replace `assets/images/profile.png` with a new image, preferably square and at least 640×640. A large original is fine because the site makes small, fast versions automatically. If you use a different file name, update `photo` in `hugo.toml`.

### Add a profile link (e.g. Google Scholar)

In `about.yaml` under `social_links`. Supported `icon` values: `github`, `linkedin`, `scholar`, `mail`, `doc`.

```yaml
  - name: "Google Scholar"
    url: "https://scholar.google.com/citations?user=fRmGZrUAAAAJ"
    icon: "scholar"
    handle: "Google Scholar"
```

---

## Show, hide and reorder sections

Each section file starts with a few settings:

```yaml
weight: 15        # position on the page: smaller = higher up
id: "experience"  # don't change
enable: true      # false = hide the whole section
nav: "Experience" # label in the top menu; delete this line to keep it out of the menu
title: "Experience"  # heading shown on the page
```

The current order is Experience (15) → Skills (20) → Projects (25) → About (35) → Education (40) → Publications (45) → Teaching (50) → Service (55) → Contact (90).

- **Move a section:** change its `weight`. For example, to put Projects before Experience, set the Projects weight to `10`.
- **Hide a section:** set `enable: false`. A section with no entries is also hidden automatically.
- **Top menu:** it always matches what's on the page, so it can never link to a hidden section.

---

## YAML rules that prevent 90% of mistakes

1. **Indentation is spaces, never tabs.** Items in a list start with `  - ` (two spaces, dash, space). Fields of that item line up under the first word.
2. **Put text in double quotes**, especially text containing `:` or `#`. Apostrophes are fine inside double quotes: `"I'm a software engineer"`.
3. **A `"` inside text** has to be written as `\"`.
4. **Lists** can be written on one line: `tags: ["Rust", "Go"]`.
5. **Bold or italic** works only in `bio` and `highlights`: `**bold**` and `*italic*`.

If you make a mistake, `hugo server` shows an error naming the file and line, in the terminal and in the browser. Fix the line and save, and the page comes back by itself.

To check everything before pushing, run the same strict build that GitHub uses:

```bash
hugo --gc --minify --panicOnWarning
```

---

## Less common changes

- **Browser tab title / Google & LinkedIn preview text:** `seo_title` and `description` in `hugo.toml`.
- **Colours and fonts:** design tokens at the top of `themes/cv-one/assets/css/main.css` (the `:root` block for light mode, and the dark-mode blocks below it).
- **A brand-new kind of section:** create `data/homepage/<name>.yaml` with `weight`, `id: "<name>"`, `enable`, `title` and `items`, plus a template at `themes/cv-one/layouts/_partials/sections/<name>.html`. Copying `volunteer.html` is the easiest starting point.
