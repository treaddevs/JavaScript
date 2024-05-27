//--------------------------------------------------------------//
// const createPerson = (name, age, gender) => {
//     return {
//         name: name, 
//         age: age,
//         gender: gender
//     };
// };

// Same as:
const createPerson = (name, age, gender) => ( {name, age, gender}); // Pass in prop values to 
console.log(createPerson("Zodiac Hasbro", 56, "male"));
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Adding a function to an object
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
//--------------------------------------------------------------//


