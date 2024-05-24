const myName = "Sam"
const myLastName = "Treadwell"

function myFunction() {
    const fullName = myName + " " + myLastName;
    console.log(fullName);
}
myFunction();

// Double Quotes in Strings, the \ is the escape character
var doubleQ = "I am a \"double quoted\" string inside \"double quotes\".";
var doubleQ2 = 'I am a "double quoted" string inside "double quotes".';
// console.log(myStr);

// Use double quotes and single quotes
var doubleSingle = `<a href="http://www.example.com" target="_blank">Link</a>`;


/************** 
// CODE OUTPUT:
`single quotes`
"double quotes"
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
**************/

// FirstLine (space separated)
//
var myStr = "FirstLine\n";
console.log(myStr);

// SecondLine (only second line is returned)
var myStr2 = "FirstLine\rSecondLine";
console.log(myStr2);

// FirstLine       SecondLine (tab between)
var myStr3 = "FirstLine\tSecondLine";
console.log(myStr3);

// FirstLinSecondLine (removes last character)
var myStr4 = "FirstLine\bSecondLine";
console.log(myStr4);

// FirstLine
//          SecondLine (offset)
var myStr5 = "FirstLine\fSecondLine";
console.log(myStr5);

// Concatenating Strings with Variables
var ourStr = "I come first. "; 
ourStr += "I come second.";
console.log(ourStr);

var myName2 = "Sam";
var myMessage = "Hi my name is " + myName + ", am I'm feeling good today!";
console.log(myMessage);

// Returns 3
firstNameLength = myName.length;
console.log(firstNameLength);

// Returns S
firstLetterFirstName = myName.charAt(0);
firstLetterFirstName2 = myName[0];
console.log(firstLetterFirstName);
console.log(firstLetterFirstName2);

// Strings are immutable, meaning they have to be reassigned 
// (no changing character at index position) myStr[0] = "H";
var myStr6 = "Jello World";
myStr6 = "Hello World";
console.log(myStr6);

// Access the last character of a string
var firstName2 = "Breck";
var lastLetterOfFirstName = firstName2[firstName2.length - 1];
console.log(lastLetterOfFirstName);

//------------------Function------------------//
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("apricot", "irritated", "rolled", "without hesitation"));




