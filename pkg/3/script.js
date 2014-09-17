"use strict";

var countacular = ['one', 'two', 'three', 'four'];
// console.log(countacular[0]);
// console.log(countacular[1]);
// console.log(countacular[2]);

var henryC = {
  'first_name': 'henry',
  'last_name': 'clifford',
  'gender': 'male',
};
// Javascript supports different accessor syntaxes.
// console.log(henryC['first_name']);
// console.log(henryC['last_name']);
// console.log(henryC.first_name);
// console.log(henryC.last_name);

// I lied
var myself = henryC;
// console.log('I am current', myself);
henryC['middle_name'] = 'alexander';
// console.log(myself);

var thingsILike = ['beer', 'football', 'boats'];
var awesomeThings = thingsILike;
// console.log('awesome things: ', awesomeThings);
thingsILike.push('dogs');
// console.log('awesome things: ', awesomeThings);

function beersOnWall(beersRemaining){
  return beersRemaining + ' bottles of beer on the wall'
}

for (var i = 99;i >=0; i--){
  // console.log(beersOnWall(i));
}

// You shouldn't be writing this manually!
for (var i = countacular.length - 1; i >= 0; i--) {
  // console.log(countacular[i]);
};

var students = [{
  'first_name': 'henry',
  'last_name': 'clifford',
  'gender': 'male',
},{
  'first_name': 'jenny',
  'last_name': 'morse',
  'gender': 'female',
}];

for (var i = students.length - 1; i >= 0; i--) {
  // Make a reference to the current student in the loop
  var student = students[i];
};