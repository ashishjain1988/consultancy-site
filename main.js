/**
 * ============================================================
 *  main.js  —  Renders the website from data.js
 * ============================================================
 *  You should NOT need to edit this file for content updates.
 *  All content lives in data.js.
 *
 *  Only edit this file if you want to change HTML structure
 *  or add/remove an entire section.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  const d = SITE_DATA;

  // ── Helpers ─────────────────────────────────────────────
  const $ = (id) => document.getElementById(id);

  /** Escape HTML special chars */
  const esc = (str) => String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  /** Convert bare URLs in text into clickable links */
  const linkify = (text) =>
    esc(text).replace(
      /(https?:\/\/[^\s)]+)/g,
      '<a href="$1" target="_blank" rel="noopener" style="color:var(--accent)">$1</a>'
    );

  // ── Document title ───────────────────────────────────────
  document.title = `${d.identity.name} | ${d.identity.role}`;

  // ── Nav brand ────────────────────────────────────────────
  const brand = $('nav-brand');
  if (brand) {
    const words = d.identity.name.split(' ');
    const last  = words.pop();
    brand.innerHTML = `${esc(words.join(' '))} <span>${esc(last)}</span>`;
  }

  // ── Hero ─────────────────────────────────────────────────
  const heroEyebrow = $('hero-eyebrow');
  if (heroEyebrow) heroEyebrow.textContent = d.identity.role;

  const heroName = $('hero-name');
  if (heroName) {
    const words = d.identity.name.split(' ');
    const last  = words.pop();
    heroName.innerHTML = `${esc(words.join(' '))}<br><span class="hero-title-accent">${esc(last)}</span>`;
  }

  const heroFounder = $('hero-founder');
  if (heroFounder) heroFounder.textContent = `Founded by ${d.identity.founder}`;

  const heroTagline = $('hero-tagline');
  if (heroTagline) heroTagline.textContent = d.identity.tagline;

  // CTA buttons — conditionally include brochure
  const heroCtas = $('hero-ctas');
  if (heroCtas) {
    let btns = `
      <a href="#services" class="btn-primary">View Services</a>
      <a href="#contact"  class="btn-secondary">Get in Touch</a>`;
    if (d.identity.brochure) {
      btns += `
      <a href="${esc(d.identity.brochure)}" class="btn-secondary" download>⬇ Download Brochure</a>`;
    }
    heroCtas.innerHTML = btns;
  }

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

  // ── About — photo ────────────────────────────────────────
  const aboutPhoto = $('about-photo');
  if (aboutPhoto) {
    aboutPhoto.innerHTML = d.identity.photo
      ? `<img src="${esc(d.identity.photo)}" alt="${esc(d.identity.founder)}" class="about-photo" />`
      : `<div class="about-photo-placeholder">
           <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
               d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
           </svg>
           <p>Add your photo here</p>
         </div>`;
  }

  // About — profile links
  const aboutLinks = $('about-links');
  if (aboutLinks) {
    const { email_ashish, links } = d.identity;
    aboutLinks.innerHTML = `
      <a href="mailto:${esc(email)}" class="about-link">
        <span class="about-link-icon">✉</span>${esc(email_ashish)}
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

  // About — paragraphs
  const aboutParagraphs = $('about-paragraphs');
  if (aboutParagraphs) {
    aboutParagraphs.innerHTML = d.about.paragraphs
      .map(p => `<p>${esc(p)}</p>`)
      .join('');
  }

  // About — highlight cards
  const aboutHighlights = $('about-highlights');
  if (aboutHighlights) {
    aboutHighlights.innerHTML = d.about.highlights.map(h => `
      <div class="highlight-card reveal">
        <h4>${esc(h.icon)} ${esc(h.title)}</h4>
        <p>${esc(h.detail)}</p>
      </div>
    `).join('');
  }

  // ── Experience — compact org cards (inside About section) ─
  const expCards = $('exp-cards');
  if (expCards) {
    expCards.innerHTML = d.experience.map(job => `
      <div class="exp-card reveal">
        <div class="exp-card-header">
          <div>
            <p class="exp-card-org">${esc(job.org)}</p>
            <p class="exp-card-role">${esc(job.role)}</p>
          </div>
          <span class="exp-card-period">${esc(job.period)}</span>
        </div>
        <p class="exp-card-summary">${esc(job.summary)}</p>
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

  // ── Why ATGC ─────────────────────────────────────────────
  const whyIntro = $('why-intro');
  if (whyIntro) whyIntro.textContent = d.whyATGC.intro;

  const whyGrid = $('why-grid');
  if (whyGrid) {
    whyGrid.innerHTML = d.whyATGC.reasons.map(r => `
      <div class="why-card reveal">
        <div class="why-icon">${esc(r.icon)}</div>
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.description)}</p>
      </div>
    `).join('');
  }

  const whyCompare = $('why-compare');
  if (whyCompare) {
    const renderCell = (val) => {
      if (val === true)  return `<span class="compare-yes">✓</span>`;
      if (val === false) return `<span class="compare-no">✗</span>`;
      return `<span class="compare-partial">${esc(String(val))}</span>`;
    };
    whyCompare.innerHTML = `
      <h3 class="compare-title">${esc(d.whyATGC.compareTitle)}</h3>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th></th>
              <th class="col-atgc">${esc(d.identity.name)}</th>
              <th class="col-generic">Generic Service</th>
            </tr>
          </thead>
          <tbody>
            ${d.whyATGC.compareRows.map((row, i) => `
              <tr class="${i % 2 === 0 ? 'row-even' : ''}">
                <td class="feature-col">${esc(row.feature)}</td>
                <td class="val-col">${renderCell(row.atgc)}</td>
                <td class="val-col">${renderCell(row.generic)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ── Skills / Expertise ───────────────────────────────────
  const skillsLayout = $('skills-layout');
  if (skillsLayout) {
    const half = Math.ceil(d.skills.length / 2);
    const cols = [d.skills.slice(0, half), d.skills.slice(half)];
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
  if (scholarLink) scholarLink.href = d.identity.links.scholar;

  // ── Testimonials ─────────────────────────────────────────
  // const testimonialsGrid = $('testimonials-grid');
  // if (testimonialsGrid) {
  //   const hasPlaceholders = d.testimonials.some(t => t.placeholder);
  //   const note = $('testimonials-note');
  //   if (note) note.style.display = hasPlaceholders ? 'block' : 'none';

  //   testimonialsGrid.innerHTML = d.testimonials.map(t => `
  //     <div class="testimonial-card reveal">
  //       <p class="testimonial-quote">"${esc(t.quote)}"</p>
  //       <p class="testimonial-author">
  //         — ${esc(t.author)}${t.placeholder ? ' <em>(placeholder)</em>' : ''}
  //       </p>
  //     </div>
  //   `).join('');
  // }

  // ── Contact ──────────────────────────────────────────────
  const contactEmail = $('contact-email');
  if (contactEmail) {
    contactEmail.href        = `mailto:${d.identity.email}`;
    contactEmail.textContent =  d.identity.email;
  }

  const contactLinkedIn = $('contact-linkedin');
  if (contactLinkedIn) contactLinkedIn.href = d.identity.links.linkedin_atgc;

  const contactGithub = $('contact-github');
  if (contactGithub) {
    contactGithub.href        = d.identity.links.github;
    contactGithub.textContent = d.identity.links.github.replace('https://', '');
  }

  const contactScholar = $('contact-scholar');
  if (contactScholar) contactScholar.href = d.identity.links.scholar;

  const contactCalendar = $('contact-calendar');
  if (contactCalendar) {
    if (d.identity.calendar) {
      contactCalendar.href = d.identity.calendar;
      contactCalendar.closest('.contact-item').style.display = 'flex';
    } else {
      contactCalendar.closest('.contact-item').style.display = 'none';
    }
  }

  const contactBrochure = $('contact-brochure');
  if (contactBrochure) {
    if (d.identity.brochure) {
      contactBrochure.href = d.identity.brochure;
      contactBrochure.closest('.contact-item').style.display = 'flex';
    } else {
      contactBrochure.closest('.contact-item').style.display = 'none';
    }
  }

  const serviceSelect = $('service-select');
  if (serviceSelect) {
    serviceSelect.innerHTML =
      '<option value="">Select a service...</option>' +
      d.serviceOptions.map(o => `<option>${esc(o)}</option>`).join('');
  }

  // ── Footer ───────────────────────────────────────────────
  const footerBrand = $('footer-brand');
  if (footerBrand) {
    footerBrand.innerHTML = `${esc(d.identity.name)}<span style="opacity:0.45;font-size:0.85em"> · ${esc(d.identity.founder)}</span>`;
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

  // ── Scroll reveal ─────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, 50);

});