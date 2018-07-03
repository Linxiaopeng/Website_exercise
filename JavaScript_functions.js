/*
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
JavaScript functions [29 exercises with solution]
*/

// 1.Write a JavaScript function that reverse a number.

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
        str = strNew[i]
    }
    return str;
}

findLongest("Apple Google Microsoft");

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVow(str) {
    vowelList = 'aeiouAEIOU';
    countVow = 0;
    for (i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str[i]) !== -1)
            countVow++;
    }
    return countVow;
}
countVow("Google");

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function checkPrime(num) {
    if (num < 2) {
        return num + " is not prime."
    }
    for (i = 2; i < num; i++) {
        if (num % i == 0)
            return num + " is not prime."
    }
    return num + " is prime."
}

checkPrime(21);

// 9. Write a JavaScript function which accepts an argument and returns the type.

function checkValue(value) {
    return value + " is " + typeof value + ".";
}

checkValue(12);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function createMatrix(n) {
    matrix = new Array(n);
    for (i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
        matrix[i][i] = 1;
    }
    return matrix;
}

createMatrix(6);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function findNum(num) {
    num.sort(function (a, b) { return a - b });
    return `${num[1]}, ${num[num.length - 2]}`;
}

findNum([100, 99, 1, 2]);

// 12. Write a JavaScript function which says whether a number is perfect.

function findPerfect(num) {
    sum = 0;
    for (i = 0; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num)
        console.log(num + " is a perfect number");
    else
        console.log(num + " is not a perfect number");
}

findPerfect(27);

// 13. Write a JavaScript function to compute the factors of a positive integer.

function computeFac(n) {
    nFactors = [];
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            nFactors.push(i);
        }
    }
    return nFactors;
}

computeFac(15);

// 14. Write a JavaScript function to convert an amount to coins.

function convertCoins(n, coins) {
    nNew = [];
    for (i = 0; i < coins.length; i++) {
        while (n >= coins[i]) {
            nNew.push(coins[i]);
            n = n - coins[i];
        }
    }
    return nNew;
}

convertCoins(135, [100, 50, 20, 10, 5, 1]);

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function computeValue(base, exponent) {
    n = 1;
    for (i = 0; i < exponent; i++) {
        n = n * base;
    }
    return n;
}

computeValue(2, 3)

// 16. Write a JavaScript function to extract unique characters from a string.

function extractUnique(str) {
    strNew = "";
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++) {
        if (strNew.indexOf(str.charAt(i)) == -1) {
            strNew += str[i];
        }
    }
    return strNew;
}

extractUnique("Google");

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

function numOccurrences(str) {
    strNew = {};
    str = str.toLowerCase();
    str.split("").map(function (i) { strNew[i] = !strNew[i] ? 1 : strNew[i] + 1 });
    return strNew;
}

numOccurrences("Google");

// 18. Write a function for searching JavaScript arrays with a binary search.

function binoarySearch(arr, t) {
    arr.sort(function (a, b) { return a - b });
    var i = 0, j = arr.length, m;

    while (i < j) {
        m = Math.floor((i + j) / 2);
        if (t <= arr[m])
            j = m;
        else
            i = m + 1;
    }

    if (arr[i] === t)
        return i;
    else
        return -1;
}

binoarySearch([13, 32, 19, 123, 56, 3327, 2, 6731], 56);

// 19. Write a JavaScript function that returns array elements larger than a number. 

function returnNum(arr, t) {
    arr.sort(function (a, b) { return a - b });
    arr = arr.filter(function (word) {
        return word > t;
    });
    return arr;
}

returnNum([13, 32, 19, 123, 56, 3327, 2, 6731], 100);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 

function getRandom(n) {
    text = "";
    characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (i = 0; i < n; i++) {
        text += characterList.charAt(Math.floor(Math.random() * characterList.length));
    }
    return text;
}

getRandom(13);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function getSubset(arr, n) {
    arrNew = [];
    for (i = 0; i < arr.length; i++) {
        tempArr = [arr[i]];
        for (j = 0; j < arr.length; j++) {
            if (i >= j) continue;
            tempArr.push(arr[j]);
            if (n == tempArr.length) {
                arrNew.push(tempArr);
                tempArr = [arr[i]];
            }
        }
    }
    return arrNew;
}

getSubset([1, 2, 3, 4, 5], 2);

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function countNumOcc(str, t) {
    str = str.toLowerCase().split('');
    j = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == t) {
            j++
        }
    }
    return j;
}

countNumOcc("Google", "g")

// 23. Write a JavaScript function to find the first not repeated character.

function notRepeated(str) {
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++) {
        var strNew = str.charAt(i);
        if (str.indexOf(strNew) == i && str.indexOf(strNew, i + 1) == -1) {
            return strNew;
        }
    }
    return null;
}

notRepeated("Googeogel");

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubleSort(arr) {
    arrTemp = [];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                arrTemp = arr[i];
                arr[i] = arr[j];
                arr[j] = arrTemp;
            }
        }
    }
    return arr;
}

bubleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function longestCountry(arr) {
    arrTemp = "";
    j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > j)
            j = arr[i].length;
        arrTemp = arr[i];
    }
    return arrTemp;
}

longestCountry(["Australia", "Germany", "United States of America"]);

function longestCountry2(arr) {
    return arr.reduce(function (i, j) {
        return i.length > j.length ? i : j;
    }, "");
}

longestCountry2(["Australia", "Germany", "United States of America"]);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestSubstring(str) {
    longest = '';
    strTemp = '';
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < str.length; j ++) {
            if (strTemp.indexOf(str[j]) !== -1) {
                i = str.indexOf(str[j], i) + 1;
                strTemp = '';
            } else {
                strTemp = str.slice(i, j + 1);
                if (strTemp.length > longest.length) {
                    longest = strTemp;
                }
            }
        }
    }
    return longest;
}

longestSubstring("Google");

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

