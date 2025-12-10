/* =========================
   THEME VARIABLES
   ========================= */

body.light {
  --bg-main: #fff7fb;
  --bg-elevated: #ffffff;
  --bg-soft: #ffe9f5;
  --text-main: #141322;
  --text-muted: #6b7280;
  --accent: #f472b6;
  --accent-strong: #ec4899;
  --border-subtle: rgba(148, 163, 184, 0.3);
  --shadow-soft: 0 18px 40px rgba(244, 114, 182, 0.3);
}

body.dark {
  --bg-main: #050816;
  --bg-elevated: #0b1020;
  --bg-soft: #151827;
  --text-main: #e5e7eb;
  --text-muted: #9ca3af;
  --accent: #f472b6;
  --accent-strong: #f9a8d4;
  --border-subtle: rgba(75, 85, 99, 0.9);
  --shadow-soft: 0 22px 50px rgba(0, 0, 0, 0.7);
}

/* =========================
   RESET & GLOBAL
   ========================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: radial-gradient(circle at top left, rgba(244, 114, 182, 0.18), transparent 55%),
              var(--bg-main);
  color: var(--text-main);
  min-height: 100vh;
  transition: background 0.35s ease, color 0.35s ease;
}

img {
  max-width: 100%;
  display: block;
}

/* =========================
   LAYOUT
   ========================= */

.page {
  max-width: 1120px;
  margin: 90px auto 40px;
  padding: 0 18px 40px;
}

/* =========================
   NAVBAR
   ========================= */

.navbar {
  position: fixed;
  inset-inline: 0;
  top: 10px;
  display: flex;
  justify-content: center;
  z-index: 20;
}

.navbar::before {
  content: "";
  position: absolute;
  inset: 0;
  margin-inline: auto;
  width: min(1120px, 96%);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(18px);
  z-index: -1;
}

body.dark .navbar::before {
  background: rgba(7, 11, 26, 0.92);
}

.navbar > * {
  width: min(1120px, 96%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px;
}

.nav-logo {
  font-weight: 700;
  font-size: 0.95rem;
  padding: 7px 14px;
  border-radius: 999px;
  background: linear-gradient(135deg, #fb7185, #f472b6);
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(248, 113, 170, 0.5);
}

.nav-links {
  display: flex;
  gap: 16px;
  font-size: 0.9rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  padding: 4px 10px;
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-links a:hover {
  color: var(--accent-strong);
  background: rgba(244, 114, 182, 0.1);
}

.nav-links a.active {
  color: var(--accent-strong);
  background: rgba(244, 114, 182, 0.18);
}

.theme-toggle {
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-soft);
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.9rem;
}

/* Mobile: hide links, simple pill nav later if needed */
@media (max-width: 720px) {
  .nav-links {
    display: none;
  }

  .navbar > * {
    justify-content: space-between;
  }
}

/* =========================
   HERO (HOME)
   ========================= */

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 32px;
  align-items: center;
  padding-top: 20px;
}

.hero-tag {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-strong);
  margin-bottom: 8px;
}

.hero h1 {
  font-size: clamp(2.4rem, 4vw, 3rem);
  margin: 0 0 10px;
}

.accent {
  color: var(--accent-strong);
}

.hero-text {
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.7;
  max-width: 520px;
}

.hero-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* hero image */

.hero-right {
  display: flex;
  justify-content: center;
}

.hero-photo-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  padding: 6px;
  border-radius: 50%;
  background: conic-gradient(from 220deg, #fb7185, #f472b6, #fb7185);
  box-shadow: var(--shadow-soft);
}

.hero-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg-elevated);
}

.hero-photo-badge {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* hero responsive */

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .hero-right {
    order: -1;
  }

  .hero-buttons {
    justify-content: flex-start;
  }
}

/* =========================
   BUTTONS
   ========================= */

.btn-primary,
.btn-outline {
  display: inline-block;
  border-radius: 999px;
  padding: 10px 22px;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease,
    color 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #fb7185, #f472b6);
  color: #ffffff;
  box-shadow: 0 14px 35px rgba(248, 113, 170, 0.58);
  border: none;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 45px rgba(248, 113, 170, 0.7);
}

.btn-outline {
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-main);
}

.btn-outline:hover {
  background: rgba(244, 114, 182, 0.06);
}

/* =========================
   SECTIONS, CARDS, LISTS
   ========================= */

.section {
  padding: 40px 0;
}

.section-header {
  margin-bottom: 24px;
}

.section-header h2 {
  margin: 0 0 4px;
  font-size: 1.7rem;
}

.section-header p {
  margin: 0;
  color: var(--text-muted);
}

.section-subtitle {
  margin-top: 0;
}

/* card */

.card {
  border-radius: 24px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  padding: 20px 22px;
  box-shadow: var(--shadow-soft);
}

.soft-card {
  background: radial-gradient(circle at top left, rgba(244, 114, 182, 0.14), transparent 55%),
              var(--bg-elevated);
}

.skills-list,
.personality-list,
.project-points,
.contact-list {
  padding-left: 18px;
  margin: 8px 0 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.skills-list li,
.personality-list li,
.project-points li,
.contact-list li {
  margin-bottom: 6px;
  line-height: 1.5;
}

/* =========================
   ABOUT PAGE
   ========================= */

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 22px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.resume-box {
  margin-top: 16px;
}

.open-to-roles {
  max-width: 760px;
  margin: 0 auto;
  padding: 26px 26px 22px;
  border-radius: 24px;
  background: rgba(255, 220, 240, 0.6);
  border: 1px solid rgba(244, 114, 182, 0.35);
  text-align: center;
  box-shadow: 0 16px 40px rgba(248, 113, 170, 0.3);
}

body.dark .open-to-roles {
  background: rgba(20, 20, 35, 0.9);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.85);
}

/* =========================
   PROJECTS
   ========================= */

.projects-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 26px;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.9fr);
  gap: 18px;
  padding: 16px 18px;
  border-radius: 24px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-soft);
}

.project-img {
  width: 100%;
  border-radius: 18px;
  height: 230px;
  object-fit: cover;
}

.project-content h3 {
  margin-top: 2px;
  margin-bottom: 4px;
}

.project-role {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}

.project-tags span {
  padding: 4px 11px;
  border-radius: 999px;
  background: rgba(244, 114, 182, 0.17);
  font-size: 0.8rem;
}

/* stack on mobile */
@media (max-width: 900px) {
  .project-card {
    grid-template-columns: 1fr;
  }
}

/* =========================
   SKILLS
   ========================= */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

/* =========================
   CONTACT
   ========================= */

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.contact-list a {
  color: var(--accent-strong);
  text-decoration: none;
}

.contact-list a:hover {
  text-decoration: underline;
}

/* =========================
   FOOTER
   ========================= */

.footer {
  text-align: center;
  padding: 16px 0 10px;
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* =========================
   ANIMATIONS
   ========================= */

.fade-in {
  opacity: 0;
  transform: translateY(18px);
  animation: fadeIn 0.7s ease-out forwards;
}

.fade-in-delayed {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease-out 0.12s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
