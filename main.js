// Chart for production vs consumption
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

// Parallax effect on .scroll-effect sections based on vertical mouse position
document.addEventListener('mousemove', (e) => {
  const sections = document.querySelectorAll('.scroll-effect');

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const mouseY = e.clientY;

    // Calculate percentage cursor position within the section
    let percent = (mouseY - rect.top) / rect.height;
    percent = Math.min(Math.max(percent, 0), 1);

    // Movement range in px
    const moveRange = 30;

    // Vertical translation for image and text in opposite directions
    const imgTranslate = (percent - 0.5) * moveRange;
    const textTranslate = -(percent - 0.5) * moveRange;

    const img = section.querySelector('img');
    const text = section.querySelector('p');

    if (img) {
      img.style.transform = `translateY(${imgTranslate}px)`;
    }
    if (text) {
      text.style.transform = `translateY(${textTranslate}px)`;
    }
  });
});

// Navigation tab switcher
const tabs = {
  home: document.getElementById('home'),
  stats: document.getElementById('stats'),
  subscribe: document.getElementById('subscribe'),
};

function setActiveTab(tabId) {
  Object.entries(tabs).forEach(([key, el]) => {
    el.style.display = key === tabId ? 'block' : 'none';
  });

  document.querySelectorAll('nav a.tablink').forEach((link) => {
    link.classList.remove('active');
  });

  document.getElementById(`${tabId}-link`).classList.add('active');
}

document.getElementById('home-link').addEventListener('click', (e) => {
  e.preventDefault();
  setActiveTab('home');
});

document.getElementById('stats-link').addEventListener('click', (e) => {
  e.preventDefault();
  setActiveTab('stats');
});

document.getElementById('sub-link').addEventListener('click', (e) => {
  e.preventDefault();
  setActiveTab('subscribe');
});

// Default visible tab
setActiveTab('home');

// Subscription form basic handler
document.getElementById('subForm')?.addEventListener('submit', (e) => {
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
