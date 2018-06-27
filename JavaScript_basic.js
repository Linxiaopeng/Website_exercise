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
