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

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function convertCtoF(t) {
    cToF = (t / 5) * 9 + 32;
    console.log(t + "°C is " + cToF + "°F");
}
function convertFtoC(t) {
    fToC = ((t - 32) / 9) * 5;
    console.log(t + "°F is " + fToC + "°C");
}

convertCtoF(60);
convertFtoC(45);

// 12. Write a JavaScript program to get the website URL(loading page). 

alert("The website URL is " + window.location.href);

// 13. Write a JavaScript exercise to create a variable using a user - defined name. 

var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])

// 14. Write a JavaScript exercise to get the extension of a filename. 

function getFilename(n) {
    n = n.split('.').pop();
    console.log("The extension of the filename is " + n);
}
getFilename("abcd.psd.txt.jpeg");

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 

function getDifference(n) {
    if (n > 13) {
        n = 2 * (n - 13);
    } else {
        n = 13 - n;
    }
    console.log(n);
}

getDifference(2018);

// 16. Write a JavaScript program to compute the sum of the two given integers.If the two values are same, then returns triple their sum.

function computeSum(i, j) {
    var n = '';
    if (i == j) {
        n = 3 * (i + j);
    } else {
        n = i + j;
    }
    console.log(n);
}

computeSum(12, 12);

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function getDiff(n) {
    if (n > 19)
        return 3 * (n - 19);
    else
        return 19 - n;
}

console.log(getDiff(2018));

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.  

function checkNum(i, j) {
    if (i == 50 || j == 50 || i + j == 50)
        return true;
    else
        return false;
}

console.log(checkNum(25, 25));

// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400. 

function checkNum(n) {
    return (Math.abs(100 - n) <= 20)
        || (Math.abs(400 - n) <= 20);
}

console.log(checkNum(60));

// 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.

function checkPorN(n) {
    if (n > 0)
        return n + " is positive";
    else if (n < 0)
        return n + " is negative";
    else
        return n + " is Zero";
}

console.log(checkPorN(-8));

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string.If the given string begins with "Py" then return the original string.

function addPy(str) {
    if (str === null || str === undefined || str.substring(0, 2) == "Py")
        return str;
    else
        return str = "Py" + str;
}

console.log(addPy("thon"));

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.  

function removeStr(num, str) {
    return str.slice(0, num) + str.slice(++num);
}

console.log(removeStr(3, "Google"));

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.The string length must be greater than or equal to 1. 

function removeFandL(str) {
    first = str.slice(0, 1);
    last = str.slice(-1);

    if (str.length > 1)
        return str.replace(last, first).replace(first, last);
    else
        return str;
}

console.log(removeFandL("Google"));

// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

function addFandL(str) {
    first = str.slice(0, 1);

    if (str.length > 1)
        return first + str + first;
    else
        return str;
}

console.log(addFandL("Google"));

// 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. 

function check3or7(n) {
    if (n % 3 == 0 && n % 7 == 0)
        return n + " is a multiple of 3 and a multiple of 7.";
    else if (n % 3 == 0)
        return n + " is a multiple of 3.";
    else if (n % 7 == 0)
        return n + " is a multiple of 7.";
    else
        return n + " is not either a multiple of 3 or a multiple of 7.";
}

console.log(check3or7(300));

// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.The string length must be 3 or more.

function addBack(str) {
    back = str.slice(-3);

    if (str.length > 3)
        return back + str + back;
    else
        return str;
}

console.log(addBack("Google"));

// 27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

function checkJava(str) {
    start = str.slice(0, 4);

    if (start == "Java")
        return true;
    else
        return false;
}

console.log(checkJava("JavaScript"));

// 28. Write a JavaScript program to check if two given integer values are in the range 50..99(inclusive).Return true if either of them are in the said range.

function check50to99(i, j) {
    if (50 <= i && i <= 99 || 50 <= j && j <= 99)
        return true;
    else
        return false;
}

console.log(check50to99(50, 90));

// 30. Write a JavaScript program to check if a string "Script" presents at 5th(index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

function removeScript(str) {
    back = str.slice(0, -6);

    if (str.length > 6)
        return back;
    else
        return str;
}

console.log(removeScript("CoffeeScript"));