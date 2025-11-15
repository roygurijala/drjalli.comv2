const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
const year = document.getElementById('year');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.setAttribute('aria-expanded', String(!expanded));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-expanded', 'false');
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const observerOptions = {
  threshold: 0.6,
};

const navItems = document.querySelectorAll('.site-nav a');
const sections = Array.from(navItems)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.site-nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.toggle('active', entry.isIntersecting);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}
