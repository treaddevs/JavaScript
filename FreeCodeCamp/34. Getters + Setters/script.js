//--------------------------------------------------------------//
// Getters = get variables value
// Setters = set the varibles value to new value
class Book {
    constructor(author) {
        this._author = author;
    }
    // Getter
    get writer() {
        return this._author;
    }
    // Setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor; // setters do not return
    }
}
//--------------------------------------------------------------//
// _temp and _author are used within the class only
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32) // to Celcius
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp // setters do not return
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // 'new' used for instantiating new object (F)
console.log(thermos._temp)

let temp = thermos.temperature; // Get value from the Thermostat object

thermos.temperature = 26; // Sets new temperature (C)
temp = thermos.temperature; // Get the updated temperature
console.log(temp);
//--------------------------------------------------------------//