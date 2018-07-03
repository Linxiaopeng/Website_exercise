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

function calculateFactorial(n) {
    return n === 0 ? 1 : n * calculateFactorial(n - 1);
}

calculateFactorial(5);

// 2. Write a JavaScript program to find the greatest common divisor(gcd) of two positive numbers.

// b !== 0 => !b output false
// b == 0 => !b output ture

function findGcd(a, b) {
    if (!b) {
        return a;
    }
    return findGcd(b, a % b);
}

function findGcd(a, b) {
    return b === 0 ? a : findGcd(b, a % b);
}

findGcd(13, 144);

// 3. Write a JavaScript program to get the integers in range(x, y).

function getIntergers(a, b) {
    return a < b - 1 ? [a + 1, ...getIntergers(a + 1, b)] : [];
}

getIntergers(2, 9);

// 4. Write a JavaScript program to compute the sum of an array of integers. 

function calculateSum(a) {
    return a.length == 1 ? a[0] : a[0] + calculateSum(a.slice(1, a.length));
}

calculateSum([1, 2, 3, 4, 5, 6]);

// 5. Write a JavaScript program to compute the exponent of a number.

function computExponent(a, b) {
    return b / a == 1 ? 1 : 1 + computExponent(a, b / a);
}

computExponent(2, 1024);

// 6. Write a JavaScript program to get the first n Fibonacci numbers. 

function getFibonacci(n) {
    if (n == 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    pre = getFibonacci(n - 1);
    return pre.concat(pre[n - 2] + pre[n - 3]);
}

getFibonacci(4);

// 7. Write a JavaScript program to check whether a number is even or not. 

function checkEven(a) {
    a = Math.abs(a);
    if (a == 0 || a == 2) return true;
    if (a < 2) return false;
    return checkEven(a - 2);
}

checkEven(-92)

// 8. Write a JavaScript program for binary search.

// 9. Write a merge sort program in JavaScript.