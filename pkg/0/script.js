"use strict";

// Print all numbers between 10 and 30 (inclusive) that are evenly divisible by 3.



function range(start, end) {
    var list = [];
    for (var i = start; i <= end; i++) {
        list.push(i);
    }
    return list;
}


function looping(divisor) {
    var items = range(1, 10)
    var sum = 0;

    for (var i = 0; i < items.length; i++) {
        var number = items[i];
        sum += number * number;
    }

    return sum;
}

function getMax(list) {
    console.log(list);
    var maxNumber;

    for (var i = 0; i < list.length; i++) {
        var currentNumber = list[i];
        if (currentNumber > maxNumber || isNaN(maxNumber)) {
            maxNumber = currentNumber;
        }
    }

    return maxNumber;



    // if (something > somethingElse) {
    //     return something;
    // }
    // else {
    //     return somethingElse;
    // }

}















