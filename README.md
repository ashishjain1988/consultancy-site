# ATGC Bioinformatics multi-page website

This version converts the original single-page website into a static, multi-page site that can be hosted on GitHub Pages or any standard web host.

## Main pages

- `index.html` — home
- `about.html` — founder and consultancy background
- `services.html` — consulting services
- `projects.html` — project directory with individual project pages
- `pipelines.html` — pipeline directory with individual workflow pages
- `research.html` — publications
- `blog.html` — article directory with individual blog pages
- `contact.html` — contact options and email form

## Search visibility

Each page includes a unique title, description, canonical URL, social metadata, and Schema.org structured data. `sitemap.xml` and `robots.txt` are included. Update `https://atgcbioinformatics.com` in `build-multipage.mjs` if the final domain changes.

## Editing

The generated HTML files can be edited directly, but the easiest and safest method is to update the content files and regenerate the pages:

- Edit pipeline names, summaries, and workflow steps in `content/pipelines.json`.
- Edit project case studies in `content/projects.json`.
- Edit identity, services, publications, testimonials, and contact details in `data.js`.
- Run `node build-multipage.mjs` from this folder.

To add a pipeline, copy one complete object in `content/pipelines.json`, give it a unique lowercase `slug`, and change its title, summary, and steps. The generator automatically creates its detail page, adds it to the pipeline directory, and includes it in the sitemap.

Do not edit the generated files inside `pipelines/` unless you intentionally want a one-off change, because regeneration will replace them.

The contact form opens the visitor's email program. Replace it with your preferred secure form provider if you want submissions to be processed directly on the site.
