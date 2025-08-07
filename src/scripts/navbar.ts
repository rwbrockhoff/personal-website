// Script for adding styles/animations to header component

let currentScrollHandler: (() => void) | null = null;
let currentHamburgerHandler: (() => void) | null = null;
let currentDocumentClickHandler: ((e: Event) => void) | null = null;

const initializeHeader = (): void => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelector('.nav-links');
  const navLink = document.querySelectorAll('.nav-link');
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger-menu');

  // Initialize hamburger handler if it doesn't exist
  if (!currentHamburgerHandler) {
    currentHamburgerHandler = () => {
      navLinks?.classList.toggle('active');
      hamburger?.classList.toggle('active');
    };
    hamburger?.addEventListener('click', currentHamburgerHandler);

    // Close menu when clicking on links
    navLink.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        hamburger?.classList.remove('active');
      });
    });

    // Close menu clicking outside of navigation
    if (!currentDocumentClickHandler) {
      currentDocumentClickHandler = (e: Event) => {
        const target = e.target as Element;
        const nav = document.querySelector('nav');

        // Check if menu is open and click is outside navigation
        if (navLinks?.classList.contains('active') && nav && !nav.contains(target)) {
          navLinks.classList.remove('active');
          hamburger?.classList.remove('active');
        }
      };
      document.addEventListener('click', currentDocumentClickHandler);
    }
  }

  if (!currentScrollHandler) {
    currentScrollHandler = (): void => {
      let current: string | null = '';
      const currentPath = window.location.pathname;

      // Change header styles on scroll
      header?.classList.toggle('scrolled-header', window.scrollY > 0);

      if (window.scrollY < 50) {
        // When near top of page, assign active based on current page
        if (currentPath === '/' || currentPath === '') {
          current = 'home';
        } else {
          // For other pages like /blog, use clean path
          current = currentPath.replace('/', '') || 'home';
        }
      } else {
        // Assign current to sections within main user view
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.getAttribute('id');
          }
        });
      }

      // Toggle active class to nav link on scroll
      navLink.forEach((link) => {
        const href = link.getAttribute('href');
        let shouldBeActive = false;

        if (current && href) {
          if (href.includes('#')) {
            // Hash/section links: #home, /#about, etc.
            const cleanHref = href.replace(/[/#]/g, '');
            shouldBeActive = cleanHref === current;
          } else {
            // Page links: /blog
            const cleanHref = href.replace('/', '') || 'home';
            shouldBeActive = cleanHref === current;
          }
        }

        link.classList.toggle('active', shouldBeActive);
      });
    };

    // Add listener and run once on page load
    window.addEventListener('scroll', currentScrollHandler);
    currentScrollHandler();
  }
};

// Add listener for page load and astro page load
document.addEventListener('DOMContentLoaded', initializeHeader);
document.addEventListener('astro:page-load', initializeHeader);
