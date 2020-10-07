
console.log(2 + 3);
console.log("hi" + " hii");

console.log(typeof(2) == typeof("hi"));

console.log(typeof(undefined));
console.log(typeof(null)); //bug within javascript language

var apple = 2 + 3 * 609 + " hi";
//console.log(typeof(apple)); /* aoe text */

// && is and, || is or
if (typeof(apple) == typeof("String")) {
    console.log("apple is a string");
    console.log( typeof(apple == 23));
} else if (typeof(apple) == typeof (1)) {
    console.log("apple is a numebr");
} else {
    console.log("apple is netiehr");
}

//determine if a number is odd or even
var num;
if (num % 2 == 1) {
    console.log('num is odd');
} else {
    console.log('num is even');
}

var num1 = 0;
if (num1 != 0 || num1 == 0) {
    num1 = 0;
    console.log(num1);
    for (i = 0; i < 10; i++) {
        num1 = num1 + 1;
        console.log(num1);
    } 
}//or 
while (num1 < 10) {
    num1 = num1 + 1;
} console.log(num1);

var list1 = [11, 22 ,33];
var count = 0;
while (count < 3) {
    list1[count] = list1[count] + 1;
    console.log(list1[count]);
    count = count + 1;
}

var Thisfruit;
function determineFruit(taste, color){
    if (taste == "sweet" && color == "red"){
        return ("This is a watermelon");
    } else {
        return ("no clear fruit name");
    }
} 
Thisfruit = determineFruit("sweet", "red");
console.log(Thisfruit + ", sweet~!"); 

/*  Import & Export code
module.exports = functionName();
var package = require("./package.js");      
    add ./ meaning anywhere in the same directory,
    used for modules created by third-parties other than node.js
*/

var uniExample = "coffee\u0301"; //unicode example with u+0301
uniExample.length; // return 7
uniExample.normalize().length; // return 6
var emoExample = "😄";
var emoExample2 = [..."😄"];
emoExample.length; //return 2       
emoExample2.length; //return 1;

//common array operations
let fruits = ["Apple", "Orange", "Watermelon", "Peach"];
fruits.pop(); //remove last value, can store in variable
fruits.shift(); //remove first value, can store in variable
fruits.unshift(); //add value to front of a list
fruits.push(); //add value to end of a list

//do while loop
var int = 0;
do {
    int += 1;
    //console.log(int);
} while (int < 10);

//obj
let obj = {"fruitName":"Watermelon", 
           "fruitColor": {
                "color1" : "red",
                "color2" : "blue",
                "color3" : "green",
            },
            "fruitTaste": ["Sweet"]
        }
obj.fruitTaste.push("sour");
for (i in obj) {
    console.log(obj[i]);
}
console.log(obj.hasOwnProperty("fruitColor"));

//object destructuring
let person = { personOne: "Jason", personTwo: "Jack" };
let { personOne, personTwo } = person;

//use Let
var apple = "apple";
console.log(window.apple); //return apple
let peach = "peach";
console.log(window.peach); //return undefined






