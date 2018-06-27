/*
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
JavaScript basic [130 exercises with solution]
*/

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output: Today is: Tuesday.
// Current time is: 10 PM: 30 : 38

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is:" + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getMinutes();
console.log("Current Time: " + hour + ": " + minute + ": " + second);

// 2. Write a JavaScript program to print the contents of the current window.

function printCurrentPage() {
    window.print();
}

// 3. Write a JavaScript program to get the current date.
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

var currentDate = new Date();
var yy = currentDate.getUTCFullYear();
var mm = currentDate.getUTCMonth() + 1;
var dd = currentDate.getUTCDate();

if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}

console.log(dd + "-" + mm + "-" + yy);

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function areaTriangle(side1, side2, side3) {
    var perimeter = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3));
    return area;
};

console.log(areaTriangle(5, 6, 7));

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

// reference:
// https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript

function reverseString(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("REVERSESTRING"));

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

// solution 1
function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                year = "Leap Year";
            } else year = "Not a Leap Year";
        } else year = "Leap Year";
    } else year = "Not a Leap Year";
    return year;
}

console.log(leapYear("1997"));

// solution 2
function leapYear(year) {
    if (x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        year = "Leap Year";
    } else year = "Not a Leap Year";
    return year;
}

console.log(leapYear("1997"));