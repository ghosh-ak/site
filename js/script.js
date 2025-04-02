// script.js

// for marking navigation tabs

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-tabs a');
  // Get the current file name from the URL (e.g., "education.html")
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

  
  
