# Adding & editing content

## Add a new project

1. Create `src/content/projects/<slug>.mdx`. The filename (without `.mdx`) becomes the URL: `/work/<slug>`.
2. At the top of the file, export a `metadata` object:

   ```mdx
   export const metadata = {
     title: "My Film Title",
     blurb: "One-sentence description shown on cards.",
     year: "2026",
     featured: true,   // shows on the homepage Featured grid
     order: 5,         // smaller = earlier; defaults to 100
   };
   ```

3. Below the export, write the page body in Markdown. You can drop in components — most useful is `<YouTube>`:

   ```mdx
   <YouTube id="https://www.youtube.com/watch?v=dQw4w9WgXcQ" title="My Film" />

   ## Synopsis

   Whatever you want to say about the project. **Bold**, _italic_,
   [links](https://example.com), bullet lists, headings — all standard
   markdown works.
   ```

4. Save. The dev server hot-reloads. The new project shows up automatically on `/work` and (if `featured: true`) on the homepage. No edits needed to any TS/TSX file.

## YouTube embeds

`<YouTube>` accepts the full URL or just the 11-char video ID:

```mdx
<YouTube id="dQw4w9WgXcQ" />
<YouTube id="https://youtu.be/dQw4w9WgXcQ" />
<YouTube id="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
<YouTube id="dQw4w9WgXcQ" start={42} title="Film title" />
```

## Edit existing pages

- Home hero / CTA: `src/app/page.tsx`
- About bio: `src/app/about/page.tsx`
- Contact form: `src/app/contact/page.tsx`
- Project content: `src/content/projects/<slug>.mdx`

## Edit shared layout

- Top nav: `src/components/Nav.tsx`
- Footer: `src/components/Footer.tsx`

## Theme / colors

In `src/app/globals.css` — the `:root` CSS variables:

```css
--background: #1a1a1a;
--foreground: #ffffff;
--muted: #999999;
--border: #2a2a2a;
```

## Run locally

```bash
npm run dev          # http://localhost:3000
npm run build        # production build
```
