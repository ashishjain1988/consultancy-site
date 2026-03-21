/**
 * ============================================================
 *  main.js  —  Renders the website from data.js
 * ============================================================
 *  You should NOT need to edit this file for content updates.
 *  All content lives in data.js.
 *
 *  Only edit this file if you want to change the HTML
 *  structure or add/remove an entire section.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  const d = SITE_DATA;

  // ── Helpers ─────────────────────────────────────────────
  const $ = (id) => document.getElementById(id);

  /** Escape HTML to prevent injection from data strings */
  const esc = (str) => String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  /**
   * Convert plain text that may contain a URL like:
   *   "See the package (https://example.com)."
   * into a clickable <a> link.
   */
  const linkify = (text) => {
    return esc(text).replace(
      /(https?:\/\/[^\s)]+)/g,
      '<a href="$1" target="_blank" rel="noopener" style="color:var(--accent)">$1</a>'
    );
  };

  // ── Document title ───────────────────────────────────────
  document.title = `${d.identity.name}, ${d.identity.credential} | ${d.identity.role}`;

  // ── Nav brand ────────────────────────────────────────────
  const brand = $('nav-brand');
  if (brand) {
    const [first, ...rest] = d.identity.name.split(' ');
    brand.innerHTML = `${esc(first)} <span>${esc(rest.join(' '))}</span>, ${esc(d.identity.credential)}`;
  }

  // ── Hero ─────────────────────────────────────────────────
  const heroEyebrow = $('hero-eyebrow');
  if (heroEyebrow) heroEyebrow.textContent = d.identity.role;

  const heroName = $('hero-name');
  if (heroName) {
    const [first, ...rest] = d.identity.name.split(' ');
    heroName.innerHTML = `${esc(first)} ${esc(rest.join(' '))},<br><span class="hero-title-accent">${esc(d.identity.credential)}</span>`;
  }

  const heroTagline = $('hero-tagline');
  if (heroTagline) heroTagline.textContent = d.identity.tagline;

  // Hero stats
  const statsContainer = $('hero-stats');
  if (statsContainer) {
    statsContainer.innerHTML = d.stats.map(s => `
      <div class="stat">
        <span class="stat-num">${esc(s.number)}</span>
        <span class="stat-label">${esc(s.label)}</span>
      </div>
    `).join('');
  }

  // ── About ────────────────────────────────────────────────
  const aboutPhoto = $('about-photo');
  if (aboutPhoto) {
    if (d.identity.photo) {
      aboutPhoto.innerHTML = `<img src="${esc(d.identity.photo)}" alt="${esc(d.identity.name)}" class="about-photo" />`;
    } else {
      aboutPhoto.innerHTML = `
        <div class="about-photo-placeholder">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <p>Add your photo here</p>
        </div>`;
    }
  }

  const aboutLinks = $('about-links');
  if (aboutLinks) {
    const { email, links } = d.identity;
    aboutLinks.innerHTML = `
      <a href="mailto:${esc(email)}" class="about-link">
        <span class="about-link-icon">✉</span>${esc(email)}
      </a>
      <a href="${esc(links.linkedin)}" target="_blank" rel="noopener" class="about-link">
        <span class="about-link-icon">in</span>LinkedIn Profile
      </a>
      <a href="${esc(links.github)}" target="_blank" rel="noopener" class="about-link">
        <span class="about-link-icon">⌥</span>GitHub
      </a>
      <a href="${esc(links.scholar)}" target="_blank" rel="noopener" class="about-link">
        <span class="about-link-icon">◎</span>Google Scholar
      </a>
    `;
  }

  const aboutParagraphs = $('about-paragraphs');
  if (aboutParagraphs) {
    aboutParagraphs.innerHTML = d.about.paragraphs
      .map(p => `<p>${esc(p)}</p>`)
      .join('');
  }

  const aboutHighlights = $('about-highlights');
  if (aboutHighlights) {
    aboutHighlights.innerHTML = d.about.highlights.map(h => `
      <div class="highlight-card reveal">
        <h4>${esc(h.icon)} ${esc(h.title)}</h4>
        <p>${esc(h.detail)}</p>
      </div>
    `).join('');
  }

  // ── Services ─────────────────────────────────────────────
  const servicesGrid = $('services-grid');
  if (servicesGrid) {
    servicesGrid.innerHTML = d.services.map(s => `
      <div class="service-card reveal">
        <div class="service-icon">${esc(s.icon)}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.description)}</p>
        <div class="service-tags">
          ${s.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // ── Experience ───────────────────────────────────────────
  const timeline = $('timeline');
  if (timeline) {
    timeline.innerHTML = d.experience.map(job => `
      <div class="timeline-item reveal">
        <p class="timeline-date">${esc(job.date)}</p>
        <h3>${esc(job.title)}</h3>
        <p class="timeline-org">${esc(job.org)}</p>
        <ul class="timeline-details">
          ${job.bullets.map(b => `<li>${linkify(b)}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // ── Skills ───────────────────────────────────────────────
  const skillsLayout = $('skills-layout');
  if (skillsLayout) {
    // Split groups into two columns
    const half = Math.ceil(d.skills.length / 2);
    const cols  = [d.skills.slice(0, half), d.skills.slice(half)];

    skillsLayout.innerHTML = cols.map(col => `
      <div>
        ${col.map(group => `
          <div class="skill-group reveal">
            <p class="skill-group-title">${esc(group.title)}</p>
            <div class="skill-items">
              ${group.items.map(i => `<span class="skill-pill">${esc(i)}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  // ── Publications ─────────────────────────────────────────
  const pubList = $('pub-list');
  if (pubList) {
    pubList.innerHTML = d.publications.map(p => {
      const linkHtml = p.link
        ? ` · <a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || 'Link')}</a>`
        : '';
      return `
        <li class="pub-item reveal">
          <span class="pub-year">${esc(String(p.year))}</span>
          <div class="pub-content">
            <p class="pub-title${p.firstAuthor ? ' first-author' : ''}">
              ${esc(p.title)}
              ${p.firstAuthor ? '<span class="pub-badge">First Author</span>' : ''}
            </p>
            <p class="pub-journal">
              ${esc(p.authors)} — <em>${esc(p.journal)}</em>${linkHtml}
            </p>
          </div>
        </li>
      `;
    }).join('');
  }

  const scholarLink = $('scholar-link');
  if (scholarLink) {
    scholarLink.href = d.identity.links.scholar;
  }

  // ── Awards ───────────────────────────────────────────────
  const awardsGrid = $('awards-grid');
  if (awardsGrid) {
    awardsGrid.innerHTML = d.awards.map(a => `
      <div class="award-card reveal">
        <p class="award-year">${esc(a.year)}</p>
        <h4>${esc(a.title)}</h4>
        <p class="award-org">${esc(a.org)}</p>
      </div>
    `).join('');
  }

  // ── Testimonials ─────────────────────────────────────────
  const testimonialsGrid = $('testimonials-grid');
  if (testimonialsGrid) {
    const hasPlaceholders = d.testimonials.some(t => t.placeholder);

    const note = $('testimonials-note');
    if (note) note.style.display = hasPlaceholders ? 'block' : 'none';

    testimonialsGrid.innerHTML = d.testimonials.map(t => `
      <div class="testimonial-card reveal">
        <p class="testimonial-quote">"${esc(t.quote)}"</p>
        <p class="testimonial-author">
          — ${esc(t.author)}${t.placeholder ? ' <em>(placeholder)</em>' : ''}
        </p>
      </div>
    `).join('');
  }

  // ── Contact ──────────────────────────────────────────────
  const contactEmail = $('contact-email');
  if (contactEmail) {
    contactEmail.href        = `mailto:${d.identity.email}`;
    contactEmail.textContent =  d.identity.email;
  }

  const contactLinkedIn = $('contact-linkedin');
  if (contactLinkedIn) contactLinkedIn.href = d.identity.links.linkedin;

  const contactGithub = $('contact-github');
  if (contactGithub) {
    contactGithub.href        = d.identity.links.github;
    contactGithub.textContent = d.identity.links.github.replace('https://', '');
  }

  const contactScholar = $('contact-scholar');
  if (contactScholar) contactScholar.href = d.identity.links.scholar;

  const serviceSelect = $('service-select');
  if (serviceSelect) {
    serviceSelect.innerHTML =
      '<option value="">Select a service...</option>' +
      d.serviceOptions.map(o => `<option>${esc(o)}</option>`).join('');
  }

  // ── Footer ───────────────────────────────────────────────
  const footerBrand = $('footer-brand');
  if (footerBrand) {
    footerBrand.textContent = `${d.identity.name}, ${d.identity.credential}`;
  }

  const footerYear = $('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  const footerLinkedIn = $('footer-linkedin');
  if (footerLinkedIn) footerLinkedIn.href = d.identity.links.linkedin;

  const footerGithub = $('footer-github');
  if (footerGithub) footerGithub.href = d.identity.links.github;

  const footerScholar = $('footer-scholar');
  if (footerScholar) footerScholar.href = d.identity.links.scholar;

  // ── Hamburger menu ───────────────────────────────────────
  const hamburger = $('hamburger');
  const navLinks  = $('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // ── Contact form — GitHub Pages mailto fallback ──────────
  const form = document.querySelector('form[name="contact"]');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (window.location.hostname.includes('github.io')) {
        e.preventDefault();
        const name    = document.getElementById('name').value;
        const email   = document.getElementById('email').value;
        const service = document.getElementById('service-select').value;
        const message = document.getElementById('message').value;
        const subject = encodeURIComponent(`Consulting Inquiry from ${name}`);
        const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
        window.location.href = `mailto:${d.identity.email}?subject=${subject}&body=${body}`;
      }
    });
  }

  // ── Scroll reveal ────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.08 });

  // Observe all .reveal elements (includes dynamically added ones)
  const observeReveals = () =>
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Give DOM a tick for dynamic content to render
  setTimeout(observeReveals, 50);

});
