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
    var items = range(10, 30);

    for (var i = 0; i < items.length; i++) {
        var number = items[i];
        if (number % divisor === 0) {
            console.log(number);
        }
    }
}