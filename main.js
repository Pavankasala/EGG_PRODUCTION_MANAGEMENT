// Active nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a.tablink').forEach(link => {
  const href = link.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Theme toggle + localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(`${savedTheme}-theme`);

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    document.body.classList.toggle('dark-theme', !isDark);
    document.body.classList.toggle('light-theme', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileLinks = document.getElementById('mobileLinks');
if (navToggle && mobileLinks) {
  navToggle.addEventListener('click', () => {
    mobileLinks.classList.toggle('show');
  });
}
