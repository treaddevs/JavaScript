//---------------------//
// MANIPULATING ARRAYS //
//---------------------//


// push() – ADDS new element to END of array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray = ["Stimpson", "J", "cat", ["happy", "joy"]
console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
myArray.push("dog");
// ourArray = ["Stimpson", "J", "cat", ["happy", "joy"], "dog");
console.log(myArray);



// pop() – REMOVES last element at the END of array
var ourArray2 = [1, 2, 3];
var removedFromOurArray = ourArray2.pop();
// ourArray2 = [1, 2]
console.log(ourArray2);

var myArray2 = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray2.pop();
// myArray2 = [["John", 23]]
console.log(myArray2);



// shift() – REMOVES first element at the BEGINNING of array
var ourArray3 = [1, 2, 3];
var removedFromOurArray2 = ourArray3.shift();
// ourArray3 = [2, 3]
console.log(ourArray3);

var myArray3 = [["John", 23], ["cat", 2]];
var removedFromMyArray2 = myArray3.shift();
// myArray3 = [["cat", 2]]
console.log(myArray3);



// unshift() – ADDS new element to BEGINNING of array
var ourArray4 = [1, 2, 3];
ourArray4.unshift(5, 6);
// ourArray4 = [5, 6, 1, 2, 3]
console.log(ourArray4);

var myArray4 = [["John", 23], ["cat", 2]];
myArray4.unshift("Happy");

var myArray5 = ["Stimpson", "J", "cat"];
myArray5.unshift("Happy");
// myArray5 = ["Happy", "Stimpson", "J", "cat"]
console.log(myArray5);






