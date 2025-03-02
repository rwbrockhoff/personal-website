// Script for adding styles/animations to header component

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelector('.nav-links');
  const navLink = document.querySelectorAll('.nav-link');
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger-menu');

  // Navigation menu toggle
  if (hamburger != null && navLinks != null) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close menu when clicking on links
  if (hamburger != null && navLinks != null) {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // Add scroll animations
  window.addEventListener('scroll', () => {
    let current: string | null = '';

    // Change header styles on scroll
    header?.classList.toggle('scrolled-header', window.scrollY > 0);

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Ensure section is in the viewport (adjusting for small sections)
      if (
        scrollPosition >= sectionTop - windowHeight / 2 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute('id');
      }
    });

    // Add active class to nav link on scroll
    navLink.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
