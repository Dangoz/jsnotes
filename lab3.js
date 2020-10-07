// import readline-sync, and declare user input, user history
const readlineSync = require("readline-sync");
let userHistory = [];
let userInput;

// initialize game, and start asking user for instrument
function gameStart() {
	do {
		userInput = readlineSync.question("Pick an Instrument: ");
		userInput = userInput.toLowerCase();
		instrumentChoice(userInput);
	} while (userInput != "exit");
}

// respond to user input and record valid input to history
function instrumentChoice(instrument) {
	switch (instrument) {
		case "guitar":
		case "drums":
			console.log("Rock On!");
			userHistory.push("Rock On!");
			break;

		case "piano":
			console.log("Play me some chopin!");
			userHistory.push("Play me some chopin!");
			break;

		case "violin":
		case "cello":
			console.log("String instruments are the best!")
			userHistory.push("String instruments are the best!");
			break;

		case "exit":
			break;
			
    default:
			console.log("Enter a valid instrument");
	}
}

// print out user's valid instrument response in history
function showHistory() {
	if (userHistory.length == 0) {
		console.log("You have no history");
		return;
	}

	// print out each response in userHistory
	console.log("Your History was:")
	for (let item of userHistory) {
		console.log(item);
	}
}

// game start and play
gameStart();
console.log("Thanks for playing!");
showHistory();