//declare month code, week code
var monthCode = {1:1, 2:4, 3:4, 4:0, 5:2, 6:5, 
                7:0, 8:3, 9:6, 10:1, 11:4, 12:6};
var weekCode = {2:"Monday", 3:"Tuesday", 4:"Wednesday", 5:"Thursday", 
                6:"Friday", 0:"Saturday", 1:"Sunday"}
var maxDayPerMonth = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 
                    8:31, 9:30, 10:31, 11:30, 12:31};


//return the day of the week from the given date
function getDayOfTheWeek(year, month, day) {
    var yearl2 = year % 100;                        //last two digit of year
    var remainder = yearl2 % 12                      
    var twelves = (yearl2 - remainder) / 12;
    var fours = (remainder - (remainder % 4)) / 4;          
    var mCode;

    //special offsets regarding step 5
    if (isLeapYear(year) && (month == "January" || month == "February")) {
        mCode = monthCode[month] -1;
    } else {
        mCode = monthCode[month];
    }
    if (year >= 1600 && year < 1700) {
        mCode += 6;
    } else if (year >= 1700 && year < 1800) {
        mCode += 4;
    } else if (year >= 1800 && year < 1900) {
        mCode += 2;
    } else if (year >= 2000 && year < 2100) {
        mCode += 6;
    } else if (year >= 2100 && year < 2200) {
        mCode += 4;
    }

    var s6 = (twelves + fours + remainder + Number(day) + mCode) % 7; //sum according to step 6
    var weekDay = weekCode[s6];
    return weekDay;
}

//return if a year is a leap year
function isLeapYear(year) {
    if (year % 4 != 0){
        return false;
    } else if (year % 100 != 0) {
        return true;
    } else if (year % 400 != 0) {
        return false;
    } else {
        return true;
    }
}

//print out date and day of the week, for year 2020 (leap year)
function makeCalender(){
    var dayTrack = 1;
    var monthTrack = 1;
    var weekDay;
    for (var i = 0; i < 366; i++) {

        weekDay = getDayOfTheWeek(2020, monthTrack, dayTrack);
        console.log(dayTrack + "-" + monthTrack 
                    + "-2020 is a " + weekDay);

        if (dayTrack == maxDayPerMonth[monthTrack]) {
            dayTrack = 1;
            monthTrack += 1;
        } else {
            dayTrack += 1;
        }
    }
}

module.exports = {makeCalender, isLeapYear, getDayOfTheWeek};
