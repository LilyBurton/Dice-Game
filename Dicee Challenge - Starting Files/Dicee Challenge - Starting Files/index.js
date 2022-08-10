var player1 = prompt("Player 1");
var player2 = prompt("Player 2");


var randomNumber01 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber01 + ".png";
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);


var randomNumber02 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber02 + ".png";
var randomImageSrc2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2);

if (randomNumber01 > randomNumber02) {
  document.querySelector("h1").innerHTML =  player1 + " Wins!"
} else if (randomNumber01 < randomNumber02) {
  document.querySelector("h1").innerHTML = player2 + " Wins!"
} else if (randomNumber01 === randomNumber02) {
  document.querySelector("h1").innerHTML = "Draw!"
}
