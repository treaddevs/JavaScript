// Explicitly stating true/false
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
isLess(10, 15);

// Comparators (>, >=, <, <=, ==, !=) 
// automatically evalutate to true/false
function isLess2(a, b) {
    return a < b; // 10 is less than 15 so it evaluates to true
}
isLess2(10, 15);
console.log(isLess2(10, 15));