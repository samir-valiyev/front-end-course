const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const amount = document.querySelector("#amount");
	const month = document.querySelector("#month");
	const btn = document.querySelector("#btn");
	const table = document.querySelector("#table");

	for (let i = 0; i < month.value; i++) {
		let partoSum = 0;
		let monthlyPayment = parseInt(amount.value / month.value);
		console.log(i + 1 + " ci-ay:" + monthlyPayment);
	}
});
