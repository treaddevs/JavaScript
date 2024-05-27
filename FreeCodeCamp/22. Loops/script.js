//--------------------------------------------------------------//
// WHILE LOOPS:
// • Evaluate condition and performs change
// • Can lead to infinite loop if conditional statement is set up incorrectly
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// FOR LOOPS:
// 1) Initialization 2) condition 3) expression
var myArray2 = [];

for (var i = 0; i < 5; i++) {
    myArray2.push(i);
}

console.log(myArray2);
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// For Loop with Odd Numbers
var myArray3 = [];

for (var i = 1; i < 10; i += 2) {
    myArray3.push(i)
}
console.log(myArray3);
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// For Loop that Counts Backwards
var myArray4 = [];

for (var i = 9; i > 0; i -= 2) { // Decrements
    myArray4.push(i);
}

console.log(myArray4)
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Iterate through an Array (sum)
var myArray5 = [1, 2, 3, 4, 5]
var total = 0;

for (var i = 0; i < myArray5.length; i++) {
    total += myArray5[i]; // Adds each index position to running total
}

console.log(total);
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Nesting For Loops
function multiplyAll(array) {
    var product = 1;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            product *= array[i][j] // i = outter array, j = inner array
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product); // 1 * 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Do While Loops
myArray5 = [];
var i = 10;

do { // Runs before condition is checked
    myArray5.push(i);
    i++;
} while (i < 5)

console.log(i, myArray5); // 11 [10]
//--------------------------------------------------------------//
