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

function checkPal(str) {
    if (str < 3) {
        alert("Uh Oh");
        return false;
    }
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');

    originalStr = str.split().join();
    reverseStr = str.split().reverse().join();
    return originalStr == reverseStr ? true : false;
}

console.log(checkPal("Madam"));

// 3. Write a JavaScript function that generates all combinations of a string. 

function generateCom(str) {
    str = str.split("");
    var strNew = "";
    for (i = 0; i < str.length; i++) {
        strNew = str[i];
        console.log(strNew);
        for (j = i + 1; j < str.length; j++) {
            strNew += str[j];
            console.log(strNew);
        }
    }
}

generateCom("Google");