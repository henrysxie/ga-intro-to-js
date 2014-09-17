"use strict";
  
// Literals - fixed values not variables
'hello world'; // string
2; // numbers
false; // boolean

// Variables
var one = 'a cool variable!';
// Assign ones value at this time to two
var two = one;
// the above are variables
// console.log(two);

// Arrays
var myFirstArray = ['one', 'two', 'three'];
// console.log(array);

var mixedArray = ['one', 2, true, 'four'];
// console.log(mixed_array);

var variable1 = 'pow wow!';
var variable2 = 2;
var variableArray = [variable1, variable2];

var nulled = null;
// console.log(nulled);


// objects
var object = {
  'key' : 'value',
};
// console.log(object);

var tableObject = {
  'material': 'wood',
  'height': 2,
  'isATable': true
};
// console.log(tableObject);

var nestedTableObject = {
  'legs': {
    'material': 'metal',
    'height': 1.8,
    'isLegs': true
  },
  'material': 'wood',
  'height': 2,
  'isATable': true
};
// console.log(nestedObject);

var legCollection = [
  {
    'name': 'one',
    'height': 1.8
  },
  {
    'name': 'two',
    'height': 1.8
  },
  {
    'name': 'three',
    'height': 1
  },
  {
    'name': 'four',
    'height': 1.8
  },
];
// console.log(legCollection);

// http://www.reddit.com/r/britishproblems/hot.json
// proove json is readable
// JSON.parse($('pre').innerHTML)