// DAY 1 - 3 eded select yaradin, birinde rengler(sari, qirmizi, qara), ikincisinde width(100px, 200px, 300px), sonuncu select ise height(100px, 200px, 400px) deyerlerini ozunde saxlasin. 1 eded kvadrat bir qutumuz olsun(selectde olan renglerden biri default olsun), 1 eded ise buttonumuz olsun. siz selectden muvafiq width, height ve reng secib butona klik edende qutumuz o deyerlere uygun manipulasiya olunsun

const form = document.querySelector("#form");
const selectColors = document.getElementById("colors");
const selectWidths = document.getElementById("widths");
const selectHeights = document.getElementById("heights");
const btn = document.getElementById("btn");
const box = document.querySelector(".select__box");

btn.addEventListener("click", (e) => {
	e.preventDefault();

	// Colors starts
	if (selectColors.value === "yellow") {
		box.style.backgroundColor = "yellow";
	} else if (selectColors.value === "red") {
		box.style.backgroundColor = "red";
	} else if (selectColors.value === "black") {
		box.style.backgroundColor = "black";
	}
	// Colors ends

	// Width statrs
	if (selectWidths.value === "100px") {
		box.style.width = "100px";
	} else if (selectWidths.value === "200px") {
		box.style.width = "200px";
	} else if (selectWidths.value === "300px") {
		box.style.width = "300px";
	}
	// Width ends

	// Height statrs
	if (selectHeights.value === "100px") {
		box.style.height = "100px";
	} else if (selectHeights.value === "200px") {
		box.style.height = "200px";
	} else if (selectHeights.value === "400px") {
		box.style.height = "400px";
	}
	// Height ends
});
