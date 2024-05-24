const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
const width = 15
const aliensRemoved = []
// let overrides
// currentShooterIndex is 1D
let currentShooterIndex = 202
let invadersId
let isGoingRight = true
let direction = 1
let results = 0

// Loops through and creates 225 divs
for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

// Stores aliens in an array
const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

// Renames invaders class
// squares[4].classList.add('invader')

// Updates the array item to add a new class name
// squares[alienInvaders[0]].classList.add('invader')

// Adds invaders name to every index position in the array above
function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invader')
        }
    }
}
draw()

// Adds green shooter in row 5
// squares[4].classList.add('shooter');

squares[currentShooterIndex].classList.add('shooter')

// Delete alien invaders id before adding again in new position
function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}

// Moves shooter to other side of gamespace
function moveShooter(e) {
    // Remove shooter each time as not to leave a trail
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
    case 'ArrowLeft':
        // If divisible by 15 cannot move left (currentShooterIndex -=1)
        if (currentShooterIndex % width !== 0) currentShooterIndex -=1
        break
    case 'ArrowRight':
        // Checks if the shooter can move to the right

        // The condition checks if the shooter is not at the last column of the grid
        // If currentShooterIndex is 16 and the width is 15, (16 % 15 = 1)
        // Since 1 < 14, the shooter is not at the right edge and CAN move right

        // If currentShooterIndex is 14 (the right edge of the first row),
        // (14 % 15 = 14), which is not less than 14, so the shooter CANNOT move right
        
        // If currentShooterIndex is 15 (the first column of the second row),
        // (15 % 15 = 0), and since 0 < 14, the shooter CAN move right

        // width - 1 (so it doesn't move down a row)
        if (currentShooterIndex % width < width - 1) currentShooterIndex +=1
        break
    }
    squares[currentShooterIndex].classList.add('shooter')
}

// Responds to any key down
document.addEventListener('keydown', moveShooter)

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1
    remove()

    // Move the invaders down once they reach the right side
    if (rightEdge && isGoingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1 // Moves to right column
            direction = -1
            isGoingRight = false
        }
    }

    // Resets the above stament before invaders continue to move down
    if (leftEdge && !isGoingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1 // Moves to left column
            direction = 1
            isGoingRight = true
        }
    }

    // Adds value of direction to the alienInvader group
    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }

    draw()

    // If aliens hit shooter display game over
    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        resultDisplay.innerHTML = 'GAME OVER'
        clearInterval(invadersId)
    }

    if (aliensRemoved.length === alienInvaders.length) {
        resultDisplay.innerHTML = 'YOU WIN'
        clearInterval(invadersId)
    }
}
// Moves every 600 milliseconds
invadersId = setInterval(moveInvaders, 600)

function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex

    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        // Moves laser up
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')

        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('invader')
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.add('boom')

            // Removes invader class from array after 300 milliseconds
            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserId)

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            aliensRemoved.push(alienRemoved)
            // Splice removed from array
            alienInvaders.splice(alienRemoved, 1)
            results++
            resultDisplay.innerHTML = results
        }
    }

    if (e.key == 'ArrowUp') {
        laserId = setInterval(moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)
