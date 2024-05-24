//--------------------------------------------------------------//
// JS Object
var ourDog = {
    // Props: values
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};

var myDog = {
    "name": "Chester",
    "legs": 3,
    "tails": 2,
    "friends": [] // None :/
};
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Passing Props to new Objects
var testObj = {
    "hat": "trucker",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat; // Passes "trucker" to var hatValue
var shirtValue = testObj.shirt; // Passes "jersey" to var shirtValue
console.log(hatValue); // "trucker"
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Accessing Obj Props with [Bracket Notation]
// - Required for names with spaces -
var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj2["an entree"]; // passingObjs[with spaces between]
var drinkValue = testObj2["the drink"]; // passingObjs[with spaces between]
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Accesing Obj Property Values with Variables
var testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj3[playerNumber]; // Passes 16 to var player
console.log(player); // returns the value stored: "Montana"

// Key/Value pairs can be either key: "value" OR "key": "value"
// Use "key" for reserved words and special chars ("123key": value, "first-name": "John", "class" "Physics")
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Add a new Property to an Object
var myDog2 = {
    // Props: values
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};
myDog2['bark'] == "woof!" // Adds new prop ("bark": "woof!")
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Delete Props in an Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails; // delete keyword
console.log(myDog)
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Object Lookups (like a dictionary)
function phoneticLookup(val) {
    var result = "";

    switch(val) {
        case "alpha":
            result = "Adams"
            break;
        case "bravo":
            result = "Boston";
            break;
    }
    return result;
}
console.log(phoneticLookup("alpha")); // Adams

// Replace with:
function phoneticLookup2(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston"
    }
    result = lookup[val]; // to access the value passed in
}
console.log(phoneticLookup("alpha")); // Adams
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Testing Objects for Props
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp] // Return obj prop
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));
console.log(checkObj("antelope"));
//--------------------------------------------------------------//