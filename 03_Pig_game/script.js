'use strict';

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");


// Starting conditions

let scores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add("hidden");

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
}

init();

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

// Rolling dice functionality
buttonRoll.addEventListener("click", function () {
    if (playing) {
        // 1. Generating a dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1, if true - switch to the next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore; // To be changed later - 2nd player
        } else {
            switchPlayer();
        }
    }
})

buttonHold.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    }

    // 2. Check if player's score is >= 100;
    // if true - stop the game and disable buttons
    // if false - switch players

    if (scores[activePlayer] >= 20) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        diceEl.classList.add("hidden");
    } else {
        switchPlayer();
    }
})

buttonNew.addEventListener("click", init);
