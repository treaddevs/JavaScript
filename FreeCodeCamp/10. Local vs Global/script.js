// Scope: Visiblility of Variables
// Global - outside function block
// Local - accessibel only with the function they are used

//--------------------------------------------------------//
// Global Variable
var myGlobal = 10;

// Local Variable (doesn't need var)
myLocal = 10;
//--------------------------------------------------------//


// Local Variable Function
//--------------------------------------------------------//
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope()

// Cannot access – ReferenceError: myVar is not defined
// console.log(myVar) 
//--------------------------------------------------------//


// Global Variable Function
//--------------------------------------------------------//
var outerWear = "T-Shirt"; // Global

function myOutfit() {
    var outerWear = "Sweater"; // Local (takes precidence if function is called)
    return outerWear;
}
console.log(myOutfit()); // Calls function which returns "Sweater"
console.log(outerWear);
//--------------------------------------------------------//


// Return Value from Function
//--------------------------------------------------------//
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));
//--------------------------------------------------------//

//--------------------------------------------------------//
var sum = 0;

function addFive() {
    sum += 5;
    return sum;
}
console.log(addFive())
//--------------------------------------------------------//


// Assignment with Returned Value
//--------------------------------------------------------//
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
console.log(change(10))


var processed = 0;
function processArg(num) {
    return (num + 3) / 3;
}

processed = processArg(7)
console.log(processArg(7))
//--------------------------------------------------------//