//--------------------------------------------------------------//
// Ternary operator
// condition ? (statement-if-true) : (statement-if-false);
function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
} 

checkEqual(1, 2);

// Example
function checkEqual2(a, b) {
    return a === b ? (true + " ..yep, true") : (false + " ..no, false"); 
}
console.log(checkEqual2(1, 2));
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Turnary chain
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(7));
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Use const and let
// "use strict" errors if code is wrong
let catName = "Frizz"
let quote;

catName = "Beau";

function catTalk() {
    "use strict"; // Errors for undeclared variables

    catName = "Oliver";
    return quote = catName + " says Meow!";
}
console.log(catTalk());
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Use const to avoid reasignment
function printManyTimes(str) {
    "use stict";

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");
//--------------------------------------------------------------//