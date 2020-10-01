//declare month code, week code, and max days per month
const monthCode = {1:1, 2:4, 3:4, 4:0, 5:2, 6:5, 
                7:0, 8:3, 9:6, 10:1, 11:4, 12:6};
const weekCode = {2:"Monday", 3:"Tuesday", 4:"Wednesday", 5:"Thursday", 
                6:"Friday", 0:"Saturday", 1:"Sunday"}
const maxDayPerMonth = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 
                    8:31, 9:30, 10:31, 11:30, 12:31};


//return the day of the week from the given date
function getDayOfTheWeek(year, month, day) {
    let yearl2 = year % 100;                        //last two digit of year
    let remainder = yearl2 % 12                      
    let twelves = (yearl2 - remainder) / 12;
    let fours = (remainder - (remainder % 4)) / 4;          
    let mCode;

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

    let s6 = (twelves + fours + remainder + day + mCode) % 7; //sum according to step 6
    let weekDay = weekCode[s6];
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
    let dayTrack = 1;
    let monthTrack = 1;
    let weekDay;
    for (let i = 0; i < 366; i++) {

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
