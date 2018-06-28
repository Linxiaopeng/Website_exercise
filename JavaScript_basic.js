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

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

function januarySunday(year1, year2) {
    for (i = year1; i <= year2; i++) {
        var january = new Date(i, 0, 1);
        if (january.getDay() === 0) {
            console.log("The first day of " + i + " is a Sunday")
        }
    }
}

januarySunday(2014, 2050);

// reference:
// https://codepen.io/dlusk/pen/MarEvq

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

function randomNumber(i) {
    var random = Math.ceil(Math.random() * 11);
    if (i == random) {
        console.log("Good Work!")
    } else console.log("Not matched. " + "The correct answer is " + random + ".")
}

randomNumber(2);

// 9. Write a JavaScript program to calculate days left until next Christmas.

// solution 1

function calChristmas() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    } else console.log(Math.ceil(christmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) + " days left untill Christmas!");
}

calChristmas();

// solution 2

function countDown(t) {
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    var now = new Date().getTime();
    countDown = new Date(t).getTime();
    if (now < countDown) {
        distance = countDown - now;
    } else distance = now - countDown;

    console.log("There are only " + Math.ceil(distance / day) + " Days " +
        Math.ceil((distance % day) / hour) + " Hours " +
        Math.ceil((distance % hour) / minute) + " Minutes " +
        Math.ceil((distance % minute) / second) + " Seconds left until " + t);
}

countDown('Dec 25, 2018 00:00:00');

// 10. Write a JavaScript program to calculate multiplication and division of two numbers(input from user). 

function calMultiDivid(num1, num2) {
    multiplyBy = num1 * num2;
    divideBy = num1 / num2;
    console.log("Multiplication is " + multiplyBy + ". Division is " + divideBy);
}

calMultiDivid(128, 8);

