// And conditional statement
//--------------------------------------------------------//
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(30);
console.log(testLogicalAnd(30));
//--------------------------------------------------------//


// Or conditional statements
//--------------------------------------------------------//
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(5);
console.log(testLogicalOr(5));
//--------------------------------------------------------//


// Else statements
//--------------------------------------------------------//
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}
testElse(4);
//--------------------------------------------------------//


//--------------------------------------------------------//
// Chaining else statements
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else  if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

testSize(88);
console.log(testSize(88));
//--------------------------------------------------------//