// main.js
// - Highlights active nav tab
// - Applies mouse parallax to zig-zag sections
// - Renders chart (if present)
// - Enables theme toggle with localStorage persistence

// 1. Highlight current nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a.tablink').forEach(link => {
  const href = link.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// 2. Apply saved theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(`${savedTheme}-theme`);

// 3. Theme toggle with persistence
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    document.body.classList.toggle('dark-theme', !isDark);
    document.body.classList.toggle('light-theme', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}

// 4. Zig-Zag Mouse Parallax Effect
document.addEventListener('mousemove', (e) => {
  const sections = document.querySelectorAll('.scroll-effect');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const percent = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
    const reverse = section.classList.contains('reverse') ? -1 : 1;

    const img = section.querySelector('.scroll-img img, .scroll-img canvas');
    const text = section.querySelector('.scroll-text');

    const imgMove = (percent - 0.5) * 30 * reverse;
    const textMove = -(percent - 0.5) * 30 * reverse;

    if (img) img.style.transform = `translateY(${imgMove}px)`;
    if (text) text.style.transform = `translateY(${textMove}px)`;
  });
});

// 5. Optional Chart (only on index.html)
const ctx = document.getElementById('prod-cons-chart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'Production (in billions)',
          data: [78, 82, 85, 89, 94, 100, 110, 115, 118, 120],
          backgroundColor: '#90ee90',
        },
        {
          label: 'Consumption (in billions)',
          data: [75, 78, 81, 86, 91, 95, 103, 108, 112, 115],
          backgroundColor: '#ffb6c1',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' }
      }
    }
  });
}
// 6. Mobile nav hamburger toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

