//convert from fahrenheit to celsisus
function FahtoC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
} 
var TempinF = 50;
var TempinC = FahtoC(TempinF);
console.log(TempinC);

//Next function
var week = ["Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"];
var tForecast = [24, 20, 15, 19, 21, 18, 17]; //weather forecast of temperature
var hForecast = [70, 85, 91, 65, 73, 82, 95]; //weather forecast of humidity

//return the days most likely to rain, temperature <20, humidity > 80%
function rainyDays(Temperature, Humidity) {
    var day = 0;
    var report = "Rainy Days: ";
    while (day != 7) {
        if (day == 6 && tForecast[day] <= 20 && hForecast[day] > 80) {
            report = report + week[day] + ".";
        } else if (tForecast[day] <= 20 && hForecast[day] > 80){
            report = report + week[day] + ", ";
        }
        day = day + 1;
    }
    console.log(report);
}
rainyDays(tForecast, hForecast);