// Booleans (true / false)

// If Statements
//--------------------------------------------------------//
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
//--------------------------------------------------------//

// Equality Operators
//--------------------------------------------------------//
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
//--------------------------------------------------------//

// (ASSIGNMENT OPERATORS):
// Assignment: sets value
val = 3

// Equality: is 3 set to '3'?
(val == 3)
(val == '3') // True

// Strict equality: do they equate? 
(val === 3)
(val === '3') // Error

// (Both == and != do type conversion)



