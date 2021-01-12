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
const month = `${monthNames[now.getMonth()]}`;
const date = `${now.getDate()}`;
const year = `${now.getFullYear()}`;

fullDate.innerHTML = `${month} ${date}, ${year}`;
/*========== Date ends =========== */

/*========== Todo list starts =========== */

const ul = document.querySelector(".todo-list__items");
const li = document.querySelector(".todo-list__item");
const i = document.querySelector("#i");
ul.addEventListener("click", (event) => {
	event.target.classList.toggle("checked");
});
/*========== Todo list ends =========== */
