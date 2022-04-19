//Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another.
//Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently,
//instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none.
//Maybe Kenny will survive!

const happenedToDay = [];
function whatReallyHappensToday() {
  // get a random number for each disaster
  toDayV = Math.floor(Math.random() * 100 + 1);
  toDayT = Math.floor(Math.random() * 100 + 1);
  toDayE = Math.floor(Math.random() * 100 + 1);
  toDayB = Math.floor(Math.random() * 100 + 1);
  toDayM = Math.floor(Math.random() * 100 + 1);
  // Check to see if each disaster happened today
  if (toDayV > 0 && toDayV < 11) {
    happenedToDay.push("Volcano");
  }
  if (toDayT > 10 && toDayT < 26) {
    happenedToDay.push("Tsunamis");
  }
  if (toDayE > 26 && toDayE < 46) {
    happenedToDay.push("Earthquake");
  }
  if (toDayB > 45 && toDayB < 71) {
    happenedToDay.push("Blizzard");
  }
  if (toDayM > 70 && toDayM < 101) {
    happenedToDay.push("Meteor");
  }

  console.log(happenedToDay);
}

whatReallyHappensToday();
