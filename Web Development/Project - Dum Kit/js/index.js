//Find the drum elements
const drumButtons = document.querySelectorAll(".drum");

//Load sound files
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");
const snare = new Audio("sounds/snare.mp3");
const crash = new Audio("sounds/crash.mp3");
const kickBass = new Audio("sounds/kick-bass.mp3");

//Handle all sounds
function handleSounds(note) {
  switch (note) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kickBass.play();
      break;
    default:
      break;
  }
}

//Handle button animations
function handleButtonAnimation(note) {
  const currentButton = document.querySelector("." + note);
  currentButton.classList.add("pressed");

  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}

//Handle button click with events
for (let button of drumButtons) {
  button.addEventListener("click", function (e) {
    const note = button.textContent;
    handleSounds(note);
    handleButtonAnimation(note);
  });
}

//Handle key presses with events
document.addEventListener("keydown", function (e) {
  handleSounds(e.key);
  handleButtonAnimation(e.key);
});
