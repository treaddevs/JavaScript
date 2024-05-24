//--------------------------------------------------------------//
var myMusic = [ // Array Object
    { // Record
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    { // New Record
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Access Sub Objects within Object
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // last has a space so use []

console.log(gloveBoxContents)
//--------------------------------------------------------------//


//--------------------------------------------------------------//
// Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]; // pine
console.log(secondTree);
//--------------------------------------------------------------//



