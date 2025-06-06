// Highlight current nav link based on page
const path = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a.tablink');
navLinks.forEach(link => {
  if(link.getAttribute('href') === path || (path === '' && link.getAttribute('href') === 'index.html')){
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Parallax effect on .scroll-effect sections for zig-zag layout
document.addEventListener('mousemove', (e) => {
  const sections = document.querySelectorAll('.scroll-effect');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const mouseY = e.clientY;
    let percent = (mouseY - rect.top) / rect.height;
    percent = Math.min(Math.max(percent, 0), 1);

    // Parallax range
    const imgMove = (percent - 0.5) * 30;
    const textMove = -(percent - 0.5) * 30;

    // Use zig-zag layout selectors
    const img = section.querySelector('.scroll-img img');
    const text = section.querySelector('.scroll-text');

    if (img) img.style.transform = `translateY(${imgMove}px)`;
    if (text) text.style.transform = `translateY(${textMove}px)`;
  });
});

// Chart setup only on pages with #prod-cons-chart
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

// Subscription form handler only on subscriber page
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
