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

const hamburger = document.getElementById('hamburger');
const mobilePopup = document.getElementById('mobilePopup');

hamburger.addEventListener('click', function() {
  // Check if the screen width is below 768px (mobile devices)
  if (window.innerWidth <= 768) {
    const isPopupVisible = mobilePopup.style.display === 'block';

    if (isPopupVisible) {
      // Hide the popup
      mobilePopup.style.display = 'none';
      // Change icon back to hamburger
      hamburger.textContent = '⬒';
    } else {
      // Show the popup
      mobilePopup.style.display = 'block';
      // Change icon to arrow-down
      hamburger.textContent = '⬓';
    }
  }
});

// Add an event listener to handle window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    // Ensure the popup is hidden if on PC
    mobilePopup.style.display = 'none';
    // Reset the hamburger icon
    hamburger.textContent = '⬒';
  }
});
