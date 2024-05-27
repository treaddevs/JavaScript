//--------------------------------------------------------------//
// Destructuring assignment
var voxel = {x: 3.6, y: 7.4, z: 6.54}; // Object

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// Destructuring: assigns objects properties to variables
const { x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    // Assigns value in tomorrow to tempOfTomorrow variable = 79
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));
//--------------------------------------------------------------//


//--------------------------------------------------------------//
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
//--------------------------------------------------------------//


//--------------------------------------------------------------//
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y); // [1, 2, 4]

// Switch m and n
let m = 8, n = 6;
(() => {
    "use strict";
    [m, n] = [n, m]
})();
console.log(a)
console.log(b)
//--------------------------------------------------------------//


//--------------------------------------------------------------//
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFristTwo(list) {

    const [ , , ...arr] = list; // Removes first two from list

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
//--------------------------------------------------------------//


//--------------------------------------------------------------//
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));
//--------------------------------------------------------------//

