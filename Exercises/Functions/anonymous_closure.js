var count = 0;
var noClosure = function() {
    return function() {
        return ++count;
    }
}
var add = noClosure();
add(); // returns 1
add(); // returns 2
count = 0;
add();  // returns 1


var displayClosure = function() {
    var count = 0;
    return function () {
        return ++count;
    };
}
var inc = displayClosure();
inc(); // returns 1
inc(); // returns 2
count = 0;
inc(); // returns 3