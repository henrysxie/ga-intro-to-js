"use strict";


console.log("Commencing execution!!");




// Takes a list of numbers and prints their squares
function printSquares (numbers) {

    for (var i = 0; i < numbers.length; i++) {
       console.log(Math.pow(numbers[i], 2));
    }
}


// Prints all evens between 0 and 9999
function printEvens () {

    for (var i = 0; i < 10000; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    };

}


// Returns a list of all numbers divisible by `divisor`
// up until but not including `max`
function getDivBy(max, divisor) {

    var results = [];

    for (var i = 0; i < max; i++) {
        if (i % divisor == 0) {
            // Push i onto the results array
            results.push(i);
        }
    };

    return results;

}

// Takes a list of numbers and returns the largest one
function getMax (numbers) {
    var maxNumber = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
