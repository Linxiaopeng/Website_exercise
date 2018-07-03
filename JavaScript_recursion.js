/*
https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
JavaScript Recursion [9 exercises with solution]
*/

// 1. Write a JavaScript program to calculate the factorial of a number. 

function calculateFactorial(n) {
    if (n === 1) {
        return n;
    }
    return n * calculateFactorial(n - 1);
}

calculateFactorial(5);