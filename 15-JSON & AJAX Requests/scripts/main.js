let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://jsonplaceholder.typicode.com/todos");
ourRequest.onload = function () {
	let ourData = JSON.parse(ourRequest.responseText);
	console.log(ourData[0]);
};

ourRequest.send();
