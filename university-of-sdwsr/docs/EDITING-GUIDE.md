# Editing guide (no coding experience needed)

You can change everything on this website from the GitHub website itself — no software to install.

## How to edit any page

1. Open the repository on GitHub.
2. Click the file you want to change, for example `about.html`.
3. Click the pencil icon (**Edit this file**).
4. Change the words between the tags. Leave the tags themselves alone.
5. Scroll down, write a short note such as "Updated founder biography", and click **Commit changes**.
6. Wait about a minute. The website updates itself.

Only edit the **words**. A tag looks like `<p>` or `</h3>` — the text sits between them:

```html
<h3>This heading can change</h3>
<p>This sentence can change too.</p>
```

## The eight things you will change most

| You want to… | Open this file | Look for |
|---|---|---|
| Change the home page headline | `index.html` | the first `<h1>` |
| Change the four numbers on the home page | `index.html` | `hero__facts` |
| Add a course | `assets/js/courses.js` | copy any block |
| Add an instructor | `faculty.html` | copy a `person` block |
| Post an announcement | `news.html` | copy an `<article>` block |
| Add term dates | `news.html` | the "Term dates" table |
| Publish fee amounts | `admissions.html` | the "Fees and support" table |
| Change email addresses | `contact.html` and the footer of each page | `sdwsr.edu.lr` |

## Adding a course, step by step

Open `assets/js/courses.js`. Find a block that looks like this and copy it, including the braces and the comma:

```js
  {
    code: "AI-320",
    title: "Building with large language models",
    track: "Artificial Intelligence",
    level: "Advanced",
    weeks: 8,
    summary: "Prompting, retrieval, evaluation and cost control."
  },
```

Change the values inside the quotation marks. Two rules:

- `track` must be spelled exactly as one of: `Frontend`, `Software Engineering`, `Data & Databases`, `Artificial Intelligence`, `Agentic Systems`, `Documentation & Media`.
- `level` must be exactly one of: `Foundation`, `Intermediate`, `Advanced`.

If a course stops appearing on the page, a comma or a quotation mark is usually missing.

## Replacing the placeholder links

Search the project for these and replace them with the university's real addresses:

- `https://github.com/` → the university's GitHub organisation
- `https://classroom.google.com/` → the university's Google Classroom
- `admissions@sdwsr.edu.lr`, `registrar@sdwsr.edu.lr`, `office@sdwsr.edu.lr`
- `REPLACE_ME_WITH_YOUR_FORM_ENDPOINT` → your form service URL (see the README)
- `YOUR-ORG` in `robots.txt` and `sitemap.xml`

## If something breaks

Every change you make is saved as a separate version. On GitHub, open the file, click **History**, choose the version from before the problem, and restore it. Nothing is ever lost.
