'use strict';

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");
const current0El = document.querySelector("#current--1");

const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");


// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Rolling dice functionality
buttonRoll.addEventListener("click", function () {
    // 1. Generating a dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1, if true - switch to the next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore; // To be changed later - 2nd player

    } else {

    }

})
