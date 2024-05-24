var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else {
        return names[6] 
    }
}

console.log(golfScore(5, 1)); // "Hole-in-one!"
console.log(golfScore(5, 3)); // "Eagle"
console.log(golfScore(5, 4)); // "Birdie"
console.log(golfScore(5, 5)); // "Par"
console.log(golfScore(5, 6)); // "Bogey"
console.log(golfScore(5, 7)); // "Double Bogey"
console.log(golfScore(5, 8)); // "Go Home!"

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home"
*/