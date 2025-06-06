// Example: Existing functionality
console.log("Egg Production Management System JS loaded");

// ========== SCROLL EFFECT SCRIPT ==========
const scrollElements = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

scrollElements.forEach(el => observer.observe(el));
