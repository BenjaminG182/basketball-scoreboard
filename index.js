// Display current score of Home

// Display current score of Guest

// increments - +1, +2, +3
let count = 0;
let guestCount = 0;
let homeEl = document.getElementById("score")
let guestEl = document.getElementById("guest-score")

function incrementOne() {
    count += 1
    homeEl.textContent = count
}


function incrementTwo() {
    count += 2
    homeEl.textContent = count
}

function incrementThree() {
    count += 3
    homeEl.textContent = count
}

function guestIncrementOne() {
    guestCount += 1
    guestEl.textContent = guestCount
}



function guestIncrementTwo() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function guestIncrementThree() {
    guestCount += 3
    guestEl.textContent = guestCount
}
