// Popup functionality
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const popup = document.getElementById('subscriptionPopup');
    const closeBtn = document.querySelector('.close-btn');
    const subscribeForm = document.getElementById('subscribeForm');

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing! You will receive our newsletter shortly.');
            popup.style.display = 'none';
            subscribeForm.reset();
        });
    }

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Statistics Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-item p');
    stats.forEach(stat => {
        const value = stat.innerText;
        stat.innerText = '0';
        let current = 0;
        const target = parseInt(value);
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            stat.innerText = Math.round(current) + (value.includes('%') ? '%' : '');
            if (current >= target) {
                stat.innerText = value;
                clearInterval(timer);
            }
        }, 20);
    });
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('statistics')) {
                    animateStats();
                }
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe statistics section
    const statsSection = document.querySelector('.statistics');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Observe info cards for animation
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        observer.observe(card);
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});