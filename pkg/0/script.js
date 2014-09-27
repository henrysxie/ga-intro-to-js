"use strict";

function printEvenNumbers() {
    var numbers = _.range(10001);
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}

function divisbleByThreeArray() {
    var result = [];
    var numbers = _.range(1, 10001);
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function getMax(numbers) {
    var currentNumber, maxNumber;
    for (var i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        if (currentNumber > maxNumber || typeof maxNumber === 'undefined') {
            maxNumber = currentNumber;
        }
    }
    return maxNumber;
}

function isOddOrDivBy7(number) {
    return number % 2 === 1 || number % 7 === 0;
}


function getAggregateOrderCounts(orders) {
    var order, tally = {}
    for (var i = 0; i < orders.length; i++) {
        order = orders[i];
        if (order in tally) {
            tally[order] += 1;
        }
        else {
            tally[order] = 1;
        }
    }
    return tally;
}


function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fibonacciRecursive(n) {
    if (n < 2) {
        return 1;
    }
    else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
