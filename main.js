// Highlight current nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a.tablink').forEach(link => {
  if (link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Zig-zag parallax effect
document.addEventListener('mousemove', (e) => {
  const sections = document.querySelectorAll('.scroll-effect');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const percent = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
    const reverse = section.classList.contains('reverse') ? -1 : 1;

    const img = section.querySelector('.scroll-img img');
    const text = section.querySelector('.scroll-text');

    const imgMove = (percent - 0.5) * 30 * reverse;
    const textMove = -(percent - 0.5) * 30 * reverse;

    if (img) img.style.transform = `translateY(${imgMove}px)`;
    if (text) text.style.transform = `translateY(${textMove}px)`;
  });
});

// Chart.js
const ctx = document.getElementById('prod-cons-chart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Production (B eggs)',
          data: [80, 83, 86, 89, 92, 95],
          borderColor: 'green',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Consumption (B eggs)',
          data: [75, 78, 81, 84, 87, 90],
          borderColor: 'blue',
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: { responsive: true },
  });
}

// Subscription form
const subForm = document.getElementById('subForm');
if (subForm) {
  subForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const messageDiv = document.getElementById('subMessage');

    if (emailInput.value) {
      messageDiv.textContent = `Thank you for subscribing with ${emailInput.value}!`;
      emailInput.value = '';
    } else {
      messageDiv.textContent = 'Please enter a valid email.';
    }
  });
}
