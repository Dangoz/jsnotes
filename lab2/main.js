//import lab-three.js and readline-sync
const Calendar = require("./lab-three.js"); 
const readlineSync = require("readline-sync"); 

//print out all the days of 2020
Calendar.makeCalender(); 

//print out the day of the week, from the date of user input
function getDayOfTheWeekForUserDate() {
	let userYear = readlineSync.questionInt("what is the year of your date?");
  let userMonth = readlineSync.questionInt("Now, what is the month of your date in number?");
  let userDay = readlineSync.questionInt("At last, what is the day of your date?");

  let Answer = Calendar.getDayOfTheWeek(userYear, userMonth, userDay);
  console.log(Answer);
}

getDayOfTheWeekForUserDate();

