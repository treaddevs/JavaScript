//--------------------------------------------------------------//
// Random Whole Number
function randomFraction() {

    return Math.random(); // Random between 0-1
}

console.log(randomFraction());
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Round down using Math.floor
function randomWholeNum() {

    return Math.floor(Math.random() * 20); // Random whole num between 0-19
}

console.log(randomWholeNum());
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Random whole number in a range (inclusive)
function myRandomRange(ourMin, ourMax) {
    // Math.random() * (ourMax - ourMin + 1) = 6
    // the + 1 is includes 10 (5, 6, 7, 8, 9, 10)
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

myRandomRange(1, 9);

var myRandom = myRandomRange(5, 15);
console.log(myRandom); // Random num between 5 - 15
//--------------------------------------------------------------//
