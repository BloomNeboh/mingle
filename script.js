// ==========================
// Theme Toggle
// ==========================
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// ==========================
// Fade-in on Scroll
// ==========================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.animationDelay = "0.3s";
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ==========================
// AI Button
// ==========================
const aiButton = document.getElementById('ai-button');
aiButton.addEventListener('click', () => {
    alert("AI Assistant would respond here! Customize to connect your AI service.");
});
