var a = 8/7;
var b = 18/25

var theBiggest = function(a, b){
    var result;

    a>b? result = ["a", a]: result = ["b", b];
    return result;
}

console.log(theBiggest(8/9, 9/10));