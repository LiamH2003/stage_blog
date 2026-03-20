// ─── YEAR ───
document.getElementById('year').textContent = new Date().getFullYear();

// ─── HAMBURGER ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ─── SCROLL FADE-IN for blog cards ───
const cards = document.querySelectorAll('.blog-card, .info-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.05}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, box-shadow 0.25s';
  observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
  // Trigger for already-visible elements
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Add .visible class handler
const style = document.createElement('style');
style.textContent = `.blog-card.visible, .info-card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);