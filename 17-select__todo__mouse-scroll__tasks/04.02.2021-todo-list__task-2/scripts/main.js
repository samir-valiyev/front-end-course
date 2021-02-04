const ul = document.getElementById("ul");
const li = document.querySelectorAll("li");
const liSmall = document.querySelector("li");
const checkbox = liSmall.children[0];
const input = document.querySelector(".add-todo");
const addBtn = document.querySelector(".add-btn");
const errorMessage = document.querySelector(".error");

addBtn.addEventListener("click", function () {
	let inputValue = input.value;
	if (inputValue === "") {
		errorMessage.textContent = "please fill the input";
	} else {
		let data = inputValue;
		let newLi = document.createElement("LI");
		ul.appendChild(newLi);
		newLi.innerHTML = `<input type="checkbox" />${data}</li>`;
		errorMessage.textContent = "";
		input.value = "";
	}
});

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function () {
		this.classList.toggle("color-red");
	});
}
