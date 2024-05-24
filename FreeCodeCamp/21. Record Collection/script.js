//--------------------------------------------------------------//
// Record Collection (updating JSON object)
var collection = {
    // Every record has an id
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Makes a copy of the object
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Update whole object and return full collection:
// 1)   If empty sting as a value delete the value as a property
// 2)   If new track add to end of array
function updateRecords(id, prop, value) {
    // Check if the id exists in the collection
    if (!(id in collection)) {
        // If the id doesn't exist, create a new record with the provided id
        collection[id] = {};
    }
    if (value === "") { // Delete the prop
        delete collection[id][prop]; 
    } else if (prop === "tracks") { 
        collection[id][prop] = collection[id][prop] || []; // If it exists = itself, otherwise new empty array
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "YO GABBA GABBA"));
console.log(updateRecords(5555, "artist", "SAMSON"));
//--------------------------------------------------------------//