// humanAge = (dogAge - 2) * 4 + 21;

// var dogAge = prompt("How old is your doggo?");
// var humanAge = (dogAge - 2) * 4 + 21;
// alert("Your dog's human age is " + humanAge + " years old");

//=============================================================================//

// function getMilk(money) {
//     var cost = 1.5;
//     var bottles = Math.floor(money / 1.5);
//     console.log("With $" + money + " you can buy " + bottles + 
//                " bottles of milk for a cost of $" + cost + " per bottle.");
// }

// getMilk(5);

// function getMilk(money) {
//     console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk");
//     return money % 1.5; //Remainder of this division
// }

// var change = getMilk(4);
// console.log("Your change is $" + change);

// function calcBottles(startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     return numberOfBottles;
// }

// getMilk(5);

//=============================================================================//

// var yourName = prompt("Enter your name: ");
// var theriName = prompt("Enter their name to see lovescore: ")
// var loveScore = Math.random();
// loveScore = loveScore * 100;
// loveScore = Math.floor(loveScore) + 1; //1-100

// if (loveScore > 70) {
//     alert("Your love score is " + loveScore + "% You love each other like Kanye love Kanye");
// } 

// if (loveScore > 30 && loveScore <= 70) {
//     alert("Your love score is: " + loveScore + "%");
// } 

// if (loveScore <= 30) {
//     alert("Your love score is: " + loveScore + "% " + "You go together like oil and water");
// }

// console.log("Your love score between you, " + yourName + " and " + theriName +
//             " is: " + loveScore + "%");

//=============================================================================//

// function bmiCalculator (weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return bmi;
// }
// function interpretation (bmi) {
//     if (bmi < 18.5) {
//         return("Your BMI is " + bmi + ", so you are underweight");
//     } 
//     else if (bmi > 18.5 && bmi < 24.9) {
//         return("Your BMI is " + bmi + ", so you have normal weight");
//     } 
//     else (bmi > 24.9) {
//         return("Your BMI is " + bmi + ", so you are overweight");
//     } 
//     return interpretation;
// }

//=============================================================================//

// Long version
// if (year % 4 ===0){
//     if (year % 100 === 0)
//         if (year % 400 === 0) {
//             return "Leap year."
//         } else {
//             return "Not leap year."
//         }
//         } else {
//             return "Leap year."
//         }
//     } else {
//         return "Not leap year" 
//     }
// }

// Efficient version
// function isLeap(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//         console.log("The year is a leap year.");
//         return true;
//     } else {
//         console.log("The year is not a leap year.");
//         return false;
//     }
// }
// // Get user input for the year
// var userInput = prompt("Enter a year: ");

// // Parse the user input as an integer
// var yearToCheck = parseInt(userInput);

// // Check if the entered value is a valid number
// if (isNaN(yearToCheck)) {
//     console.log("Please enter a valid number for the year.");
// } else {
//     // Call the function with the user-provided year
//     isLeap(yearToCheck);
// }

//=============================================================================//

// Angela
// Jack
// Pam
// James
// Lara
// Jason

// var guestList = ["Angela", "Jack", "Pam", "Lara", "Jason"];
// var name = prompt("What is your name: ");
//     if (guestList.includes(name)) { 
//         console.log("Welcome to the party!");
//     } else {
//         console.log("Your name is not on the guest list");
//     }

//=============================================================================//

// Push onto array (end of array)
// output.push(1, 2, 3, 4, 5);

// Pop off of array (end of array, last item)
// output.pop();

//===========//
//|FIZZ BUZZ|//
//===========//
// Bunch of kids in circle, list numbers in sequence. If number called out is
// divisable by 3 shout "Fizz" if number is divisable by 5 shout "Buzz" if both
// shout "FizzBuzz"

// var output = [];
// var count = 1;

// function fizzBuzz() {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push('FizzBuzz');
//     } else if (count % 3 === 0) {
//         output.push('Fizz');
//     } else if (count % 5 === 0) {
//         output.push('Buzz');
//     } else {
//         output.push(count);
//     }
    
//     count++;
//     console.log(output);
// }

// Call fizzBuzz multiple times to see the sequence
// for (var i = 0; i < 15; i++) {
//     fizzBuzz();
// }

//=============================================================================//

// 99 Bottles of Beer on the Wall

// function beer() {
//     var numBottles = 99;
//     while (numBottles >= 0) {
//     console.log(numBottles + " bottles of beer on the wall, " + numBottles + " bottles of beer.");
//     console.log("Take one down pass it around, " + numBottles + " bottles of beer on the wall.");
//     numBottles--;
//     }
// }

// beer();

//=============================================================================//

// Fibonacci Numbers

// function fibonacciGenerator(n) {
//     if (n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return [0, 1];
//     } else {
//         var fibonacciArray = [0, 1];
//         for (var i = 2; i < n; i++) {
//             fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
//         }
//         return fibonacciArray;
//     }
// }

// var result = fibonacciGenerator(3);
// console.log(result);


// Code Challenge:

// function fibonacciGenerator(n) {
//     var output = [];
//     if (n === 1) {
//         output = [0];
//     } else if (n === 2) {
//         output = [0, 1];
//     } else {
//         output = [0, 1];
//         for (var i = 2; i < n; i++) {
//             output.push(output[output.length - 2] + 
//                        output[output.length - 1]);
//         }
//     }
//     return output;
// }

// output = fibonacciGenerator(10);
// console.log(output);

//=============================================================================//

// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

// console.log(randomNumber1);

//=============================================================================//

// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }
// calculator(6, 3, subtract);

//=============================================================================//

// var houseKeeper1 = {
//     name: "Alica",
//     age: "31",
//     hasWorkPermit: true,
//     languages: ["French", "English"]
// }

//=============================================================================//

function HouseKeeper(name, yearsOfExperience, cleaningRepitoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepitoire = cleaningRepitoire;
    this.clean = function() {
        alert("Cleaning in progress!");
    }
}

var houseKeeper1 = new HouseKeeper("Matilda", 9, ["lobby", "bedroom"]);
houseKeeper1.clean();

console.log(houseKeeper1.name);