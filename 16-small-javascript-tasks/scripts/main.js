"use strict";

/*Javacript First Task Starts*/
console.log("/*======= Task 1 Starts ======*/");
function longer(champ, contender) {
	return contender.length > champ.length ? contender : champ;
}

function longestWord(str) {
	var words = str.split(" ");
	return words.reduce(longer);
}
console.log(longestWord("EcmaCode üzvlərini salamlayırıq"));

console.log("/*======= Task 1 Ends ========*/");
/*Javacript First Task Ends*/

/*Javacript Second Task Starts*/
console.log("/*======= Task 2 Starts ======*/");
const longWords = "javascript dili çox populyar dildir";

const toCapital = function (str) {
	const longWords = str.split(" ");
	return longWords
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
};

const result = toCapital(longWords);
console.log(result);
console.log("/*======= Task 2 Ends ========*/");
/*Javacript Second Task Ends*/

/*Javacript Third Task Starts*/
console.log("/*======= Task 3 Starts ======*/");
var array = [1, 5, 8, 21, 4];
var largest = 0;
for (var i = 0; i <= largest; i++) {
	if (array[i] > largest) {
		var largest = array[i];
	}
}
console.log(largest);
console.log("/*======= Task 3 Ends ========*/");
/*Javacript Third Task Ends*/
