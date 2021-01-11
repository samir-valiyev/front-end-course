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
const icon = document.querySelector(".fa-circle");
const ul = document.querySelector(".todo-list__items");
const li = document.querySelector(".todo-list__item");

ul.addEventListener("click", (event) => {
	console.log(event.target);
	event.target.classList.toggle("checked");
	event.target.classList.remove("fa-circle");
});
/*========== Todo list ends =========== */
