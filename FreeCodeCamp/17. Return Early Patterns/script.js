function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined; // Escapes the second return if it evaluates to true
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); // The two is to the second power
}

console.log(abTest(2, 2));