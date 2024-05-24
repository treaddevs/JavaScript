function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "aplha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }
    return answer;
}

console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
console.log(caseInSwitch(3))
console.log(caseInSwitch(4))



function moreSwitches(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b": 
            answer = "bird";
            break;
        case "c":
            answer = "crab"
            break;
        default: // If not a, b, c function returns "stuff"
            answer = "stuff"
    }
    return answer;
}

console.log(moreSwitches("a"))
console.log(moreSwitches("b"))
console.log(moreSwitches("c"))
console.log(moreSwitches(5))



function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 1:
        case 2:
        case 3:
            answer = "Mid";
            break;
        case 1:
        case 2:
        case 3:
            answer = "High";
            break;
    }
    return 
}


// Replace chain of if/else statements with switch
function chainToSwitch(val) {
    var answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    }
return answer;
}

function chainToSwitch2(val) {
    var answer = "";

    switch(val) {
    case "bob":
        answer = "Marley";
    case 42:
        answer = "The Answer";
    case 1:
        answer = "There is no #1";
    }
return answer;
}