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


// for transition

document.addEventListener("DOMContentLoaded", function() {
  // Create a transition overlay if it doesn't exist
  let overlay = document.getElementById('transition-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'transition-overlay';
    document.body.appendChild(overlay);
  }
  
  // Slight delay to allow the overlay to render, then fade it out (revealing the page)
  setTimeout(() => {
    overlay.classList.add('fade-out');
  }, 50);

  // Attach click event listeners to all anchor tags
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      // If link has target="_blank", do not intercept
      if (link.getAttribute('target') === '_blank') {
        return;
      }
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        e.preventDefault();
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        setTimeout(() => {
          window.location = href;
        }, 500);
      }
    });
  });
});

  
  