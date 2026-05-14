/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================
   DARK MODE & LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

/* Load Saved Theme */
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

/* Toggle Theme */
themeToggle.addEventListener("click", () => {

  body.classList.toggle("dark-mode");

  /* Save Theme */
  if (body.classList.contains("dark-mode")) {

    localStorage.setItem("theme", "dark");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    localStorage.setItem("theme", "light");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';
  }
});


/* =========================
   DROPDOWN SYMBOL ROTATE
========================= */

const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown.querySelector("a");
const dropdownMenu = dropdown.querySelector(".dropdown-menu");

/* Create Arrow Symbol */
const arrow = document.createElement("span");
arrow.innerHTML = " ▼";
arrow.style.fontSize = "12px";
arrow.style.transition = "0.3s";

dropdownLink.appendChild(arrow);

/* Dropdown Toggle For Mobile */
dropdownLink.addEventListener("click", (e) => {

  if (window.innerWidth <= 768) {
    e.preventDefault();

    dropdownMenu.classList.toggle("show");

    /* Rotate Symbol */
    if (dropdownMenu.classList.contains("show")) {
      arrow.style.transform = "rotate(180deg)";
      arrow.style.display = "inline-block";
    } else {
      arrow.style.transform = "rotate(0deg)";
    }
  }
});


/* =========================
   CLOSE MENU WHEN CLICKED
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
    }

  });

});