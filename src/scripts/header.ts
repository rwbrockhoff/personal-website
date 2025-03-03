// Script for adding styles/animations to header component

const sections = document.querySelectorAll('section');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger-menu');

// Navigation menu toggle
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on links
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
    hamburger?.classList.remove('active');
  });
});

// Add scroll animations
window.addEventListener('scroll', () => {
  let current: string | null = '';

  // Change header styles on scroll
  header?.classList.toggle('scrolled-header', window.scrollY > 0);

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    // Ensure section is in the viewport (adjusting for small sections)
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  // Toggle active class to nav link on scroll
  navLink.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
