const checkMark1 = document.querySelector(".checkmark-1");
const checkMark2 = document.querySelector(".checkmark-2");
const checkMark3 = document.querySelector(".checkmark-3");
const slider = document.querySelector(".slider");

checkMark1.addEventListener("click", function () {
	slider.style.background = "#9b59b6";
});
checkMark2.addEventListener("click", function () {
	slider.style.background = "#3498db";
});
checkMark3.addEventListener("click", function () {
	slider.style.background = "#1abc9c";
});
