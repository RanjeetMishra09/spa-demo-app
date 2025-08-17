function showScreen(screenId, element) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");

  document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
  element.classList.add("active");

  if (screenId === "manager-dashboard") {
    initCharts();
  }
}

function toggleRole() {
  const employeeNav = document.getElementById("employee-nav");
  const managerNav = document.getElementById("manager-nav");
  const isEmployee = !employeeNav.classList.contains("hidden");

  if (isEmployee) {
    employeeNav.classList.add("hidden");
    managerNav.classList.remove("hidden");
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("manager-dashboard").classList.add("active");
    document.querySelector(".role-toggle").textContent = "Switch to Employee";
    initCharts();
  } else {
    managerNav.classList.add("hidden");
    employeeNav.classList.remove("hidden");
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("employee-home").classList.add("active");
    document.querySelector(".role-toggle").textContent = "Switch to Manager";
  }
}

function updateGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById("greeting");
  let greeting = "Welcome";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  greetingEl.textContent = `${greeting}, Ranjeet`;
}
updateGreeting();

/* =======================
   Chart.js Initialization
======================= */
let chartsInitialized = false;
function initCharts() {
  if (chartsInitialized) return;
  chartsInitialized = true;

  new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Revenue (₹)",
        data: [200000, 250000, 220000, 300000, 280000, 320000],
        borderColor: "#1565c0",
        backgroundColor: "rgba(21, 101, 192, 0.2)",
        tension: 0.4,
        fill: true
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });

  new Chart(document.getElementById("serviceChart"), {
    type: "pie",
    data: {
      labels: ["Swedish Massage", "Aromatherapy", "Foot Massage", "Facial"],
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ["#1565c0", "#42a5f5", "#90caf9", "#bbdefb"]
      }]
    },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } }
  });

  new Chart(document.getElementById("employeeChart"), {
    type: "bar",
    data: {
      labels: ["Ranjeet", "Yogesh", "Sanika", "Rahul"],
      datasets: [{
        label: "Appointments",
        data: [20, 15, 18, 12],
        backgroundColor: "#1565c0"
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
}
