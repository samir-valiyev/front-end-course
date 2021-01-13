"use strict";
/*============ Date starts ============*/
const fullDate = document.querySelector(".full-date");
const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const now = new Date();
const date = `${now.getDate()}`;
const month = `${monthNames[now.getMonth()]}`;
const year = `${now.getFullYear()}`;

fullDate.innerHTML = `${month} ${date}, ${year}`;
/*========== Date ends =========== */

/*========== Todo list starts =========== */
const ul = document.querySelector(".todo-list__items");
const li = document.querySelectorAll(".todo-list__item");
const icon = document.querySelectorAll("i");
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function () {
		this.classList.toggle("checked");
		this.children[0].classList.toggle("far");
		this.children[0].classList.toggle("fa-circle");
		this.children[0].classList.toggle("fas");
		this.children[0].classList.toggle("fa-check");
	});
}

/*========== Todo list ends =========== */
