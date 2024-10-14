// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target element's ID
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          // Smooth scroll to the target element
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});
