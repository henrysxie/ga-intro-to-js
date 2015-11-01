

function getMax (numbers) {

    var maxNumber = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;

}


function divisibleByThree() {

    var divBy3 = [];

    for (var number = 3; number <= 10000; number += 3) {
        divBy3.push(number);
    }

    return divBy3;

}


function printEvens () {

    for (var number = 1; number <= 10000; number++) {

        if (number % 2 == 0) {
            console.log(number);
        }

    }

}


// There are 100 bottles of beer on the wall...
// There are 99 bottles of beer on the wall...
// There are 98 bottles of beer on the wall...
// ...
// There is 1 bottle of beer on the wall...
// There are 0 bottles of beer on the wall...
function beerCountdown (numberOfBeerBottles) {

    for (var number = numberOfBeerBottles; number >= 0; number--) {

        if (number != 1) {
            console.log("There are " + number + " bottles of beer on the wall");
        }
        else {
            console.log("There is 1 bottle of beer on the wall.");
        }

    }

    return "That's it - no more beer!";

}
