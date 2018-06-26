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