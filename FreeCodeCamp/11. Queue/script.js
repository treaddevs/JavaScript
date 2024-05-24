
// Queues
//--------------------------------------------------------//
function nextInLine(arr, item) {
    arr.push(item);
    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Pushed 6 onto array
console.log("After: " + JSON.stringify(testArr));
//--------------------------------------------------------//

//--------------------------------------------------------//
function nextInLine2(arr, item) {
    arr.push(item);
    return arr.shift(); // Removes first item
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine2(testArr, 6)); // Pushed 6 onto array
console.log("After: " + JSON.stringify(testArr));
//--------------------------------------------------------//

