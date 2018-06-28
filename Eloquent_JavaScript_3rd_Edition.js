/*
Eloquent JavaScript 3rd Edition
Code Practice
*/

// Chapter 2: Program Structure

// 2.1 Looping a Triangle

for (var triangle = "#"; triangle.length < 8; triangle += "#") {
    console.log(triangle);
}

// 2.2 FizzBuzz

for (var number = 1; number < 101; number++) {
    var output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Bizz";
    console.log(output || number);
}

// 2.3 Chessboard

var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n"
}

console.log(board);

// Chapter 3: Function

// 3.1 Minimum

function min(i, j) {
    if (i < j)
        return i;
    else
        return j;
}

console.log(min(0, 10));

// 3.2 Recursion

function checkEven(n) {
    if (n > 0 && n % 2 == 0)
        return n + " is even."
    else if (n > 0 && n % 2 != 0)
        return n + " is odd."
    else
        return n + " is a negative number."
}

console.log(checkEven(50));

// 3.3 Bean counting

function countBs(str) {
    j = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            j++;
        }
    }
    return j;
}

console.log(countBs("BBBBBC"));

function countChar(str1, str2) {
    j = 0;
    for (i = 0; i < str1.length; i++) {
        if (str1.charAt(i) === str2) {
            j++;
        }
    }
    return j;
}

console.log(countChar("BBBBBC", "C"));