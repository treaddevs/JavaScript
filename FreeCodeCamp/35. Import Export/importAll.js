// Import all from "capitalizeSrings" 
// importAll.js
import * as capitalizeStrings from "./capString";

// Now you can access the exports from capString.js via the capitalizeStrings object
console.log(capitalizeStrings.capitalizeString("example")); // "Example"
console.log(capitalizeStrings.foo); // "bar"
console.log(capitalizeStrings.bar); // "foo"
