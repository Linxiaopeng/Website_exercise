/*
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
JavaScript basic [130 exercises with solution]
*/

// 1. Write a JavaScript program to display the current day and time in the following format.Go to the editor
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