//--------------------------------------------------------------//
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    //s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

console.log();
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // Prevents object from changing

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
//--------------------------------------------------------------//
