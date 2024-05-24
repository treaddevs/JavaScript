// Arrays hold several pieces of data in one place
var myArray = ["Boca", 23, 2.2, 5.98];

// Multi-Dimensional Arrays
var myArray2 = [["The universe", 42], ["everything", 101010]];
// Returns first Sub-Array, and the Second Element (42)
console.log(myArray2[0][1]);

// Returns 50
var myArray3 = [50, 60, 70];
var myData = myArray3[0];

// Update Array Element (first element of array is now 45, not 67)
var myArray4 = [67, 89, 122];
myArray4[0] = 45;
console.log(myArray4);

// Access Multi-Dimensional Arrays
var myArray5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
console.log(myArray5[2][1]);
console.log(myArray5[3][0][1]);
