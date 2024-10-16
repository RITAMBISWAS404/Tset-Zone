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

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});

// Select all skill cards with the 'animate' class
const skillCards = document.querySelectorAll('.animate');

// Function to check if an element is in the viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to add 'in-view' class when the element is scrolled into view
function handleScroll() {
    skillCards.forEach(skillCard => {
        if (isInView(skillCard)) {
            skillCard.classList.add('in-view');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the scroll function on page load (for any already in view)
handleScroll();

