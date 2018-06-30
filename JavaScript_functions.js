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

reverseNum("JavaScript");

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

checkPal("Madam");

// 3. Write a JavaScript function that generates all combinations of a string. 

function generateCom(str) {
    str = str.split('');
    var strNew = '';
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

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphStr(str) {
    return str.split('').sort().join('');
}

alphStr("Google");

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function convertStr(str) {
    strNew = str.toLowerCase().split(" ");
    for (i = 0; i < strNew.length; i++) {
        strNew[i] = strNew[i].charAt(0).toUpperCase() + strNew[i].slice(1);
    }
    return strNew.join(" ");
}

convertStr("google map");

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

function findLongest(str) {
    strNew = str.split(" ");
    j = 0;
    for (i = 0; i < strNew.length; i++) {
        if (strNew[i].length > j)
            j = strNew[i].length;
            str=strNew[i]
    }
    return str;
}

findLongest("Apple Google Microsoft");