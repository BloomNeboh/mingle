/* =======================
   THEME TOGGLE
======================= */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Persist theme on reload
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

/* =======================
   EXPERIENCE TOGGLE
======================= */
document.querySelectorAll(".exp-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("aria-controls");
    const target = document.getElementById(targetId);
    const expanded = btn.getAttribute("aria-expanded") === "true";
    target.hidden = expanded;
    btn.setAttribute("aria-expanded", !expanded);
  });
});

/* =======================
   SCROLL REVEAL
======================= */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* =======================
   RIPPLE EFFECT
======================= */
const rippleRoot = document.getElementById("ripple-root");

document.querySelectorAll(".btn, .icon-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    const circle = document.createElement("span");
    const diameter = Math.max(el.clientWidth, el.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - el.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - el.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    el.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

/* =======================
   FOOTER YEAR
======================= */
document.getElementById("year").textContent = new Date().getFullYear();
