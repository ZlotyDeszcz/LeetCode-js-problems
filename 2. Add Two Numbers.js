// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

k1 = [9,9,9,9,9,9,9];
k2 = [9,9,9,9];

// l1 = [2,4,3];
// l2 = [5,6,4];
var total1=0;
var total2=0;

var addTwoNumbers = function(l1, l2) {
    for(i=0; i < l1.length; i++){
        total1 = total1 + l1[i]*Math.pow(10,i);
        number1 = total1;
        console.log(number1);
    }
     for(i=0; i<l2.length; i++){
        total2 = total2 + l2[i]*Math.pow(10,i);
        number2 = total2;
        console.log(number2);
    }
    result = number1+number2;
    digits = result.toString().split('');
    realDigits = digits.map(Number).reverse();
    return realDigits;
};

// console.log(addTwoNumbers(l1,l2));



console.log(addTwoNumbers(k1,k2));
