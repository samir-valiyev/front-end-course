// dark mode toggle starts
const toggleMenu = document.querySelector(".toggle-state");

toggleMenu.addEventListener("click", function () {
	document.body.classList.toggle("dark-mode");
});
// dark mode toggle ends

// header navigation menu stats
const bars = document.querySelector(".menu-animation-bars");
const navMenu = document.querySelector(".nav");
const body = document.querySelector("body");

bars.addEventListener("click", function () {
	if (navMenu.style.display === "block") {
		navMenu.style.display = "none";
		navMenu.style.display = null;
	} else {
		navMenu.style.display = "block";
	}
});
// header navigation menu ends
console.log();