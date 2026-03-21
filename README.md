# Ashish Jain — Personal Website

A modular, GitHub Pages-ready personal website for bioinformatics consulting.

---

## 📁 File Structure

```
/
├── index.html   ← HTML skeleton (structure only — rarely needs editing)
├── style.css    ← All visual styles and colors
├── data.js      ← ✅ YOUR CONTENT — edit this file for all updates
├── main.js      ← Renders content from data.js into the page
└── assets/      ← (create this folder) Put your photo here
```

---

## ✏️ How to Update Content

**99% of the time, you only need to edit `data.js`.**

Open `data.js` and find the section you want to update:

| What to change | Where in data.js |
|---|---|
| Name, email, links | `identity` |
| Hero stats (10+ years, etc.) | `stats` |
| Bio paragraphs | `about.paragraphs` |
| Highlight cards | `about.highlights` |
| Consulting services | `services` |
| Work history | `experience` |
| Skill groups | `skills` |
| Publications | `publications` |
| Awards | `awards` |
| Testimonials | `testimonials` |
| Contact form options | `serviceOptions` |

### Adding a publication

Find the `publications` array in `data.js` and add a new entry:

```js
{
  year: 2026,
  title: "Your paper title here",
  authors: "Ashish Jain, Co-Author Name, et al.",
  journal: "Nature Methods",
  firstAuthor: true,               // set true to highlight in teal
  link: "https://doi.org/...",     // optional
  linkLabel: "DOI",                // optional, shown as link text
},
```

### Adding a job

Find the `experience` array and add a new entry:

```js
{
  date:  "January 2026 — Present",
  title: "Your Job Title",
  org:   "Organization Name",
  bullets: [
    "Describe what you did here.",
    "Another accomplishment.",
    "If a bullet has a URL like https://example.com it becomes a link automatically.",
  ],
},
```

### Adding your photo

1. Create an `assets/` folder in the same directory as `index.html`
2. Put your headshot there (e.g. `assets/photo.jpg`)
3. In `data.js`, update:
   ```js
   photo: "assets/photo.jpg",
   ```

### Replacing placeholder testimonials

Find the `testimonials` array in `data.js`. Replace each entry with real ones and set `placeholder: false`:

```js
{
  quote:  "Ashish delivered excellent analysis on our scRNA-seq dataset.",
  author: "Dr. Jane Smith, Harvard Medical School",
  placeholder: false,
},
```

---

## 🎨 Changing Colors or Fonts

Open `style.css` and edit the `:root` block at the top:

```css
:root {
  --accent:  #2c5f6e;   /* main teal color — change this to retheme */
  --gold:    #b08c50;   /* accent gold color */
  --paper:   #faf9f7;   /* page background */
  /* ... */
}
```

---

## 🚀 Deploying to GitHub Pages

1. Create a repository named `yourusername.github.io`
2. Upload all files (`index.html`, `style.css`, `data.js`, `main.js`, and `assets/` if you have a photo)
3. Go to **Settings → Pages → Source → main branch → Save**
4. Your site will be live at `https://yourusername.github.io`

### Custom domain

1. Add a file named `CNAME` (no extension) to the repo containing your domain:
   ```
   ashishjain.com
   ```
2. Point your domain's DNS A records to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. In GitHub → Settings → Pages → set your custom domain

---

## 📬 Contact Form

- **On GitHub Pages**: The form opens a pre-filled `mailto:` link in the visitor's email client
- **On Netlify** (if you ever migrate): The `data-netlify="true"` attribute enables Netlify Forms with no backend needed
