// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'),
//sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called,
//those stars should be left-justified (the first star would be very first char in the text field),
//or right-justified (the last star would be very last char in the text field,
//with potentially some number of spaces at beginning of text field before the block of stars start),
//or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

//Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
//Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.
//0Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

function drawLeftStars(num) {
  var stars = "";
  for (let i = 0; i < num; i++) {
    stars = stars + "*";
  }
  return stars;
}
console.log(drawLeftStars(5));

function drawRightStars(num) {
  var lineStarsRight = "";
  for (let i = 0; i < 75; i++) {
    if (num >= 75 - i) {
      lineStarsRight = lineStarsRight + "*";
    } else {
      lineStarsRight = lineStarsRight + " ";
    }
  }
  console.log("linesStarsRight is characters long", lineStarsRight.length);
  return lineStarsRight;
}

function centerStars(num) {
  var starCenter = "";
  var startStars = (75 - num) / 2;
  for (let i = 0; i < 75; i++) {
    if (i > startStars && i <= startStars + num) {
      starCenter = starCenter + "*";
    } else {
      starCenter = starCenter + " ";
    }
  }
  console.log(starCenter);
  console.log("Star Center is", starCenter.length, "characters long");
}

centerStars(6);

console.log(drawRightStars(5));
