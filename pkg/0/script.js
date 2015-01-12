"use strict";


function divisor (number) {
    if (number <= 0) {
        return "Provide a legit divisor!";
    }

    for (var i = 0; i < 10000; i += number) {
        console.log(i);
    }
}


function helloGreeting (name) {
    var random = Math.random();
    if (random > 0.5) {
        var greet = "Hi";
    }
    else {
        var greet = "Howdy";
    }
    alert(greet + ", " + name + '!!');
}


function demo () {
    for (var i = 0; i < 10000; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function listDemo() {
    var list = [1, 2, 3, 5];
    for (var i = list.length - 1; i >= 0; i--) {
        console.log(list[i]);
    };
}

function beer () {
    for (var i = 100; i >= 0; i--) {
        if (i === 1) {
            console.log("There is " + i + " bottle of beer on the wall.")
        }
        else {
            console.log("There are " + i + " bottles of beer on the wall.");
        }
    };
}

function takesList(list) {
    var maxNumber;
    var currentNumber;
    for (var i = list.length - 1; i >= 0; i--) {
        currentNumber = list[i];
        if (!maxNumber) {
            maxNumber = currentNumber;
        }
        else {
            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
        console.log(maxNumber);
    };
    return maxNumber;
}


function tally(orders) {
    var tally = {};
    var current;
    for (var i = orders.length - 1; i >= 0; i--) {
        current = orders[i];

        // If order already exists in tally,
        // then increment the tally.
        if (current in tally) {
            tally[current] += 1;
        }
        // If it's the first time I see this order,
        // then add it to my tally with value 1
        else {
            tally[current] = 1;
        }
    };

    var sum = 0;
    for (var key in tally) {
      if (tally.hasOwnProperty(key)) {
        sum += tally[key];
      }
    }

    var sanityCheck = sum === orders.length;
    if (sanityCheck) {
        alert('It worked!');
    }
    else {
        alert('You might want to double check your code');
    }
    return tally;
}


function forEach (list, action) {
    for (var i = 0; i < list.length; i++) {
        action(list[i]);
    }
}

function sum(numbers) {
    var total = 0;
    forEach(numbers, function(number) {
        total += number;
    });
    return total;
}


function reduce (combine, base, list) {
    forEach(list, function(element) {
        base = combine(base, element);
    });
    return base;
}

function add (n1, n2) {
    return n1 + n2;
}

function multiply (n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    return n1 / n2;
}

function reduceSum (numbers) {
    return reduce(add, 0, numbers);
}

function reduceMultiply (numbers) {
    return reduce(multiply, 1, numbers);
}

function reduceDivide (numbers, base) {
    return reduce(divide, base, numbers);
}















