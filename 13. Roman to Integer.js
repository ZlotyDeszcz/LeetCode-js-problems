conversion = {"I": 1,"V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};

var myString;

function romanIntoInteger (myString) {
    myArray = myString.split('');
    console.log(myArray);
    startNumber = 0;

    for (i=0; i < myArray.length; i++) {
        prevent=myArray[i];
        preventNumber=conversion[prevent];
        current=myArray[i+1];
        currentNumber=conversion[current];
    
        console.log(preventNumber);
    if (preventNumber >= currentNumber) {
        startNumber += preventNumber;
    }
    else if(preventNumber && !currentNumber)
    {
        startNumber += preventNumber;
    }
    else {
        startNumber -= preventNumber;
    }
    document.getElementById("result").innerHTML = startNumber;
    }    
    return startNumber;

}

// document.getElementById("result").innerHTML = romanIntoInteger(myString);
// m = "XXVI";
// console.log(romanIntoInteger(m));
// n = "DCLIV";
// console.log(romanIntoInteger(n));

// // w = conversion[myArray[1]];
// console.log(myArray);
// console.log(w);


// const I = 1;
// const V = 5;
// const X = 10;
// const L = 50;
// const C = 100;
// const D = 500; 
// const M = 1000;

