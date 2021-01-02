// Navigation menu start
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
const navMenu = document.querySelector(".nav");

open.addEventListener("click", function () {
	navMenu.style.display = "block";
});

close.addEventListener("click", function () {
	navMenu.style.display = "none";
});

// Navigation menu end
