//--------------------------------------------------------------//
// Arrow Functions
//
// var magic = function() {
//     return new Date();
// }

// var magic = () => {
//     return new Date();
// }

const magic = () => new Date();
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Pass args to Arrow funciton
//
// var myConcat = function (arr1, arr2) {
//     return arr1.concat(arr2);
// }

// var myConcat = (arr1, arr2) => {
//     return arr1.concat(arr2);
// }

const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Map + Filter
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    // Filter based on condition
    // Map creates a new array based on condition (squaring)
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Rest Operator
const sum = (function() {
    return function sum(...args) { // Rest operator (any number of args)
        // const args = [ x, y, z ]; // 3 args
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5)); // Rest
//--------------------------------------------------------------//
