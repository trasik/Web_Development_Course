// Pseudo random numbers to be displayed by the dices
const randomNumberDice1 = Math.floor(Math.random() * 6) + 1;
const randomNumberDice2 = Math.floor(Math.random() * 6) + 1;

//Get needed elements from DOM
//Dice Images
const dice1Image = document.querySelector(".img1");
const dice2Image = document.querySelector(".img2");
//H1 Message
const message = document.querySelector(".container h1");

//Set the image files for each dice to the generated random numbers

dice1Image.setAttribute("src", `images/dice${randomNumberDice1}.png`);
dice2Image.setAttribute("src", `images/dice${randomNumberDice2}.png`);

if (randomNumberDice1 === randomNumberDice2) {
  message.textContent = "Draw!";
} else if (randomNumberDice1 > randomNumberDice2) {
  message.textContent = "Player 1 Wins!";
} else {
  message.textContent = "Player 2 Wins!";
}
