# University of SDWSR — official website

The website of the **University of SDWSR**, an online university founded on **6 May 2025** by **Dr. Samuel D. Wilson Sr.**, managed and operated by **SDW Jr.**, teaching software development, databases, artificial intelligence and agentic systems to students in Liberia and across the developing world.

This is a plain static site: HTML, CSS and a small amount of JavaScript. No build step, no framework, no dependencies to install. It runs on GitHub Pages for free.

---

## 1. Put it on GitHub

```bash
# inside this folder
git init
git add .
git commit -m "University of SDWSR website"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/sdwsr-website.git
git push -u origin main
```

## 2. Turn on GitHub Pages

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push once more (or re-run the workflow). The included workflow at `.github/workflows/deploy-pages.yml` publishes the site.
4. Your site appears at `https://YOUR-ORG.github.io/sdwsr-website/`.

To use a custom domain such as `sdwsr.edu.lr`, add it under **Settings → Pages → Custom domain**, and create a file named `CNAME` in the repository root containing just the domain name.

---

## 3. Files you will edit most

| File | What it controls |
|---|---|
| `assets/js/courses.js` | The whole course catalogue. Add a course by copying one block. |
| `index.html` | Home page: headline, the four statistics, the six track cards. |
| `about.html` | University story, the "at a glance" table, the milestone timeline. |
| `programs.html` | The six certificate tracks and how study is structured. |
| `admissions.html` | Application form, entry requirements, the fees table. |
| `faculty.html` | Leadership and instructor profiles. |
| `news.html` | Announcements and term dates. |
| `contact.html` | Email addresses and the contact form. |
| `learning-platforms.html` | GitHub, GitHub Classroom and Google Classroom setup. |
| `assets/css/style.css` | Colours, fonts and spacing — all at the top of the file. |

### Adding a course

Open `assets/js/courses.js`, copy one block, change the values:

```js
{
  code: "AI-400",
  title: "Computer vision",
  track: "Artificial Intelligence",
  level: "Advanced",
  weeks: 8,
  summary: "One sentence describing what the student will be able to do."
}
```

`courses.html` rebuilds itself — search and track filters included.

### Changing the colours

Everything lives in `:root` at the top of `assets/css/style.css`:

```css
--deep:  #12313b;   /* header, hero, footer */
--gold:  #e9b93c;   /* the lone star accent */
--red:   #c4392c;   /* advanced courses, secondary accent */
--paper: #f3f5f2;   /* page background */
```

---

## 4. Make the forms actually send

Static hosting cannot process a form on its own. The application form (`admissions.html`) and the contact form (`contact.html`) both submit through JavaScript to whatever URL is in their `action` attribute.

Pick one free service, then replace `REPLACE_ME_WITH_YOUR_FORM_ENDPOINT` in both files:

- **Formspree** — sign up, create a form, paste the endpoint (`https://formspree.io/f/xxxxxx`).
- **Getform** or **Basin** — same idea.
- **Google Forms** — create a form, and link to it from the Apply button instead.

Until an endpoint is set, the form tells the visitor it is not connected rather than failing silently.

---

## 5. Linking the university's other platforms

`learning-platforms.html` documents the intended structure:

- **GitHub organisation** — one repository per course, one template repository per assignment.
- **GitHub Classroom** — one classroom per track (FE, SE, DB, AI, AG, DM).
- **Google Classroom** — announcements, deadlines and grades, mirrored from GitHub.
- **Video library** — tutorials published in a low-data version for students on mobile.

Replace the placeholder links (`https://github.com/`, `https://classroom.google.com/`) in the page footer and on that page with the university's real organisation and classroom URLs.

Suggested repository naming:

```
sdwsr-website              this site
handbook                   policies, staff guides
fe-101-html-css            course material
fe-101-week-03-template    assignment template
capstones                  index of graduating projects
```

---

## 6. Running it on your own machine

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Structure

```
.
├── index.html                 Home
├── about.html                 History, mission, milestones
├── programs.html              Six certificate tracks
├── courses.html               Searchable catalogue
├── learning-platforms.html    GitHub / Google Classroom / video
├── admissions.html            Application form and requirements
├── faculty.html               Leadership and instructors
├── news.html                  Announcements and term dates
├── contact.html               Contact form and addresses
├── 404.html                   Not-found page
├── favicon.svg
├── assets/
│   ├── css/style.css
│   ├── js/main.js             Navigation, filtering, forms
│   ├── js/courses.js          Course data — edit this
│   └── img/logo.svg, star.svg
├── docs/EDITING-GUIDE.md      Plain-language guide for non-developers
└── .github/workflows/deploy-pages.yml
```

## Accessibility and performance

Built to work on a mid-range Android phone: no images heavier than an SVG, keyboard navigation throughout, a skip link, visible focus outlines, semantic headings, and motion that respects `prefers-reduced-motion`. Fonts load from Google Fonts with system fallbacks, so the site still reads correctly if that request fails.

## Licence

Code: MIT (see `LICENSE`). University name, marks and written content: © University of SDWSR.
