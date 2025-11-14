/* -------------------------
   REVEAL ON SCROLL
---------------------------*/
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* -------------------------
   THEME TOGGLE
---------------------------*/
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
});

/* -------------------------
   EXPERIENCE CARD EXPAND
---------------------------*/
const expToggles = document.querySelectorAll('.exp-toggle');

expToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('aria-controls');
    const targetEl = document.getElementById(targetId);
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    targetEl.hidden = expanded;
    btn.setAttribute('aria-expanded', !expanded);
  });
});

/* -------------------------
   DYNAMIC YEAR IN FOOTER
---------------------------*/
document.getElementById('year').textContent = new Date().getFullYear();

/* -------------------------
   RIPPLE EFFECT
---------------------------*/
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', e => {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const rect = button.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

/* -------------------------
   LEFT ROADMAP STAR NAV
---------------------------*/
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', () => {
    const target = document.querySelector(star.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
