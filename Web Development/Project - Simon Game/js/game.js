// Global Variables to control the game
const buttonColors = ["red", "blue", "green", "yellow"];
let gameSequence = [];
let userSequence = [];
let gameStarted = false;
let level = 0;

//Helper Functions that compute game logic

/* 
Display/Update Title
@param message - the given message to be displayed
 */
const displayTitle = (message) => $("#level-title").text(message);

/* 
Play Given Sound
@param name - given name of file to be played
 */
const playSound = (name) => {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

/* 
Animation Of Button Click
@param color - given color to be animated
 */
const animateButtonClick = (color) => {
  $(`#${color}`).addClass("pressed");
  setTimeout(function () {
    $(`#${color}`).removeClass("pressed");
  }, 100);
};

/* 
Generate the Next Sequence
 */
const generateNextSequence = () => {
  userSequence = [];
  level++;
  displayTitle(`Level ${level}`);

  const randomIndex = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[randomIndex];

  gameSequence.push(randomColor);
  $(`#${randomColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
};

/*
Restart the Game 
*/
const startOver = () => {
  level = 0;
  gameSequence = [];
  gameStarted = false;
};

/* 
Check Both Sequences Against Each Other for Win/Lose Conditions
@param level - current level of the game
 */
const checkSequences = (level) => {
  if (userSequence[level] === gameSequence[level]) {
    if (userSequence.length === gameSequence.length) {
      setTimeout(function () {
        generateNextSequence();
      }, 1000);
    }
  } else {
    //Game over conditions
    playSound("wrong");
    $("body").addClass("game-over");
    displayTitle("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
};

/* HANDLERS FOR EVENTS */

//Handler for key press events on the document to check if the game was started or not
$(document).on("keypress", (e) => {
  if (!gameStarted) {
    displayTitle(`Level ${level}`);
    generateNextSequence();
    gameStarted = true;
  }
});

//Handler for when a button is clicked
$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  userSequence.push(userChosenColor);
  animateButtonClick(userChosenColor);
  playSound(userChosenColor);
  checkSequences(userSequence.length - 1);
  console.log(userSequence);
});
