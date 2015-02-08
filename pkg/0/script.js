"use strict";

// Prompt the user for a number
// If not a number, tell the user
// Else, alert "You number is the
// square root of <some other number>"

// var number = prompt('Pick a number');
// if (isNaN(number)) {
//     alert('That is not a number');
// }
// else {
//     alert('Your number is the square root of ' + number * number);
// }

// There are 100 beer bottles on the wall.
// There are 99 beer bottles on the wall.
// ...
// There is 1 beer bottle on the wall.
// There are 0 beer bottles on the wall.

function beer (beerStackSize) {
    for (var i = beerStackSize; i >= 0; i--) {
        if (i == 1) {
            console.log('There is ' + i + ' bottle of beer on the wall.')
        }
        else {
            console.log('There are ' + i + ' bottles of beer on the wall.');
        }
    }
}

function sum (x, y) {
    return x + y;
}

function evenlyDivisible (evenStackSize, divisor) {
    for (var i = 0; i <= evenStackSize; i += divisor) {
        console.log(i);
    }
}

function getMax(list) {
    var maxNumber;
    for (var i = 0; i < list.length; i++) {
        var currentNumber = list[i];
        if (!maxNumber || currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }
    return maxNumber;
}













