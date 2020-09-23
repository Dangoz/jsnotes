
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

