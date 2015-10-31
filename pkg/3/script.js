"use strict";

var countacular = ['one', 'two', 'three', 'four'];
// console.log(countacular[0]);
// console.log(countacular[1]);
// console.log(countacular[2]);

var henryX = {
  'firstName': 'henry',
  'lastName': 'xie',
  'gender': 'male',
};
// Javascript supports different accessor syntaxes.
// console.log(henryX['first_name']);
// console.log(henryX['last_name']);
// console.log(henryX.first_name);
// console.log(henryX.last_name);

// I lied
var myself = henryX;
// console.log('I am current', myself);
henryX['middleInitial'] = 'S';
// console.log(myself);

var thingsILike = ['rock climbing', 'piano', 'starcraft'];
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
  'firstName': 'henry',
  'lastName': 'xie',
  'gender': 'male',
},{
  'firstName': 'jenny',
  'lastName': 'morse',
  'gender': 'female',
}];

for (var i = students.length - 1; i >= 0; i--) {
  // Make a reference to the current student in the loop
  var student = students[i];
};