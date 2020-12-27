/*Header navigation menu start*/

const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.querySelector(".nav");

open.addEventListener("click", function () {
	nav.style.display = "block";
});
close.addEventListener("click", function () {
	nav.style.display = "none";
});
/*Header navigation menu end*/
