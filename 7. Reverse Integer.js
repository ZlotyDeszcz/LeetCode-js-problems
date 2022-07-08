// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

x=120;
y=-123;

var reverse = function(x) {
    splited = x.toString().split('');
    if(splited[0] == "-"){
        shifted = splited.shift();
        reversed = splited.map(Number).reverse();
        joined = reversed.join("");
        parsed = parseInt(joined);
        result = parsed*(-1);
    }
    else{
        reversed = splited.map(Number).reverse();
        joined = reversed.join("");
        parsed = parseInt(joined);
        result=parsed*(-1)*(-1);
    }
    return result;

};

console.log(reverse(x));
console.log(reverse(y));