var Calendar = require("./lab-three.js"); //import lab-three.js
var readlineSync = require("readline-sync"); //import readline-sync

Calendar.makeCalender(); //print out all the days of 2020

//print out the day of the week, from the date of user input
function getDayOfTheWeekForUserDate() {
    var userYear = readlineSync.question("what is the year of your date?");
    var userMonth = readlineSync.question("Now, what is the month of your date?");
    var userDay = readlineSync.question("At last, what is the day of your date?");

    var Answer = Calendar.getDayOfTheWeek(userYear, userMonth, userDay);
    console.log(Answer);
}
getDayOfTheWeekForUserDate();

