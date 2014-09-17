"use strict";

function hello(){
  alert('hello world!');
};
// hello();

// This function takes arguments!
function hello2(argument){
  // String concatenation
  alert('hello ' + argument);
}
// hello2('new york')

// Multiple arguments, names don't matter
function hello3(argument1, secondBit){
  alert(argument1 + ' ' + secondBit);
}
// hello3('afternoon', 'ga');

// This function demos returns
function greeting(morning){
  if(morning){
    return 'good morning';
  }else{
    return 'gday';
  }
  return 'what do I do?';
}

// This function returns a new value
function addition(n1, n2){
  return n1+n2;
}
// console.log(addition(n1, n2));
// var computed = addition(n1, n2);
// console.log(computed);

// This function both performs a task and computes a value
function complex(n1, n2){
  alert('adding numbers ' + n1 + ' ' + n2);
  return n1+n2;
}
// console.log(complex(1, 2));