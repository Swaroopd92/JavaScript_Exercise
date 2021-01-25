function findBiggestFraction(a,b) {
    var answer;
    a>b ? answer = ["firstFraction", a] : answer = ["secondFraction", b];

    return answer
}

var firstFraction = 3/4;
var secondFraction = 5/7;

fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("Frist fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log(fractionResult[0] + " result: " + fractionResult[1]);
