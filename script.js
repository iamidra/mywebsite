// script.js

// Greeting based on time of day
window.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Hello!";
    if (hour < 12) greeting = "Good morning!";
    else if (hour < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";
    greetingEl.textContent = greeting;
  }

  // Theme toggle
  const toggleBtn = document.getElementById("toggle-theme");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  }
});

// Toggle project details in projects.html
function toggleDetails(button) {
  const details = button.nextElementSibling;
  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
    button.textContent = "Hide Details";
  } else {
    details.classList.add("hidden");
    button.textContent = "Show Details";
  }
} 
console.log("script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        // observer.unobserve(entry.target); // optional: only once
      }
    });
  }, {
    threshold: 0.3 // means: 30% visible triggers animation
  });

  skillCards.forEach(card => observer.observe(card));
});

