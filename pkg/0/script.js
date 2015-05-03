"use strict";







function beers (start) {

    for (var numBeers = start; numBeers >= 0; numBeers--) {

        // If only one beer left
        if (numBeers == 1) {
            console.log('There is ' + numBeers + ' beer left on the wall.');
        }
        else {
            console.log('There are ' + numBeers + ' beers left on the wall.');
        }

    }

}




//     // Looping over each person
//     for (var i = peopleArray.length - 1; i >= 0; i--) {

//         var personalInterests = peopleArray[i].interests;

//         for (var j = 0; j < personalInterests.length; j++) {

//             interests.push(personalInterests[j]);

//         }

//     }

//     return interests;
// }


function isOddOrDiv7 (number) {
    return number % 2 == 1 || number % 7 == 0;
}





function getMax (numbers) {

    // Declare max variable, first position in array
    var maxNumber = numbers[0];

    // Loop through array
    for (var i = 0; i < numbers.length; i++) {

        // If number in array at current position is bigger than max
        if (numbers[i] > maxNumber) {
            // Then update the max variable
            maxNumber = numbers[i];
        }

    }

    // Return max variable
    return maxNumber;
}



function div3() {

    var array = [];

    for (var i = 1; i < 10000; i++) {
        if (i % 3 == 0) {
            array.push(i);
        }
    }

    return array;

}



function evens () {

    for (var i = 2; i <= 10000; i += 2) {
        console.log(i);
    }

}


function printNumbers () {

    for (var i = 0; i < 10; i++) {
        console.log("Siani");
    }
}

function writeHello (name) {
    if (!name) {
        alert('must pass name');
    }
    else if (name.length < 3) {
        alert("Not your initials - I need your name.");

        if (name.length == 1) {
            alert("Wow, you're clearly lazy.");
        }

    }
    else {
        alert("Thanks for your name!");
        console.log("Hello, " + name + "!");
    }

}





