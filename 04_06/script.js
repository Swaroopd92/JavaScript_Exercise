var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secondFraction) // immediately invoked function. So, the variables has to be defined before the function definition.

console.log(theBiggest); // return the function itself
