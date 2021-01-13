let redSquares = document.getElementsByClassName("square");
let whiteSquares = document.getElementsByClassName("white");

for (let i = 0; i < redSquares.length; i++) {
	redSquares[i].addEventListener("click", function () {
		this.classList.toggle("square");
		this.classList.toggle("white");
	});
}

for (let i = 0; i < whiteSquares.length; i++) {
	whiteSquares[i].addEventListener("click", function () {
		this.classList.toggle("white");
		this.classList.toggle("square");
	});
}
