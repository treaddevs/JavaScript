//--------------------------------------------------------------//
// Spead operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    // arr2 = arr1; // This would make arr2 a reference to arr1
    arr2 = [...arr1]; // This makes a new array that is a copy of arr1
    arr1[0] = 'potato'
})();
console.log(arr2);
//--------------------------------------------------------------//