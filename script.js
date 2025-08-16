function showScreen(screenId, element) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));

  // Show selected screen
  document.getElementById(screenId).classList.add("active");

  // Update active nav item
  document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");
}

// Greeting based on time
function updateGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById("greeting");
  let greeting = "Welcome";

  if (hour < 12) greeting = "Good Morning 🌸";
  else if (hour < 18) greeting = "Good Afternoon 🌼";
  else greeting = "Good Evening 🌙";

  greetingEl.textContent = `${greeting}, Ranjeet`;
}

updateGreeting();
