/*
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
JavaScript functions [29 exercises with solution]
*/

// 1.Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223	

function reverseNum(num) {
    var j = '';
    for (i = num.length; i > 0; i--) {
        j = j + num.slice(0, i).slice(-1);
    } return j;
}

console.log(reverseNum("JavaScript"));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?


