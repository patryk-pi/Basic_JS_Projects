'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").innerText = "🚫 No number!"
    } else if (guess === secretNumber) {
        document.querySelector(".message").innerText = "🎉 Correct number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").innerText = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").innerText = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").innerText = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
            score--;
            document.querySelector(".score").innerText = score;
        } else {
            document.querySelector(".message").innerText = "💥 You lost the game!";
            document.querySelector(".score").innerText = 0;
        }

    }
})

document.querySelector(".again").addEventListener("click", function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").innerText = "Start guessing...";
    document.querySelector(".score").innerText = score;
    document.querySelector(".number").innerText = "?";
    document.querySelector(".guess").value = "";
})
