"use strict";

// if (3 > 5) {
//     alert("that's crazy");
// }

// else if ("hello" == "hello") {

//     if ("hello".length == 55) {
//         alert("Hello is 5 characters long");
//     }
//     else {
//         alert("I have no idea how many characters long Hello is");
//     }
// }

// else {
//     alert("that's normal");
// }

var letters = ["a", "b", "c"];

function greet (phrase) {
    alert(phrase + ' class!');
}

function printEvens() {

    for (var i = 1; i <= 10000; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

}

function divisibleBy(divisor) {

    var arr = [];

    for (var i = 1; i <= 10000; i++) {
        if (i % divisor == 0) {
            arr.push(i);
        }
    }

    console.log(arr);

}



function getMax (numbers) {

    // Initialize currentMax to first number
    var currentMax = numbers[0];

    // Loop through list of numbers
    for (var i = 0; i < numbers.length; i++) {

        // If current number > currentMax, update currentMax
        if (numbers[i] > currentMax) {
            currentMax = numbers[i];
        }

    }

    // Return currentMax
    return currentMax;

}
