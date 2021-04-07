var dicePlayer1 = document.querySelector(".img1");
var dicePlayer2 = document.querySelector(".img2");
var random1 = Math.floor(Math.random() * 6 + 1);
var random2 = Math.floor(Math.random() * 6 + 1);
var winner = document.querySelector("h1");

dicePlayer1.setAttribute("src",`./images/dice${random1}.png`);
dicePlayer2.setAttribute("src",`./images/dice${random2}.png`);

if (random1 > random2) {
  winner.innerHTML = "Player 1 winner!";
} else if (random1 < random2) {
  winner.innerHTML = "Player 2 winner!";
} else {
  winner.innerHTML = "Draw!";
}