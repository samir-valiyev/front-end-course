"use strict";
/*============ Date starts ============*/

// Month Names starts
const fullDate = document.querySelector(".full-date");
const weekDay = document.querySelector(".week-days");
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

// Month Names ends

// Week days starts
function myFunction() {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];
	weekDay.innerHTML = n;
}
myFunction();
// Week days ends

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

/*========== refresh btn start =========== */
const refreshBtn = document.querySelector(".fa-sync");

refreshBtn.addEventListener("click", function () {
	li[0].classList.remove("checked");
	icon[0].classList.remove("fas");
	icon[0].classList.remove("fa-check");
	icon[0].classList.add("far");
	icon[0].classList.add("fa-circle");

	li[1].classList.remove("checked");
	icon[1].classList.remove("fas");
	icon[1].classList.remove("fa-check");
	icon[1].classList.add("far");
	icon[1].classList.add("fa-circle");

	li[2].classList.remove("checked");
	icon[2].classList.remove("fas");
	icon[2].classList.remove("fa-check");
	icon[2].classList.add("far");
	icon[2].classList.add("fa-circle");

	li[3].classList.remove("checked");
	icon[3].classList.remove("fas");
	icon[3].classList.remove("fa-check");
	icon[3].classList.add("far");
	icon[3].classList.add("fa-circle");
});

/*========== refresh btn end =========== */
