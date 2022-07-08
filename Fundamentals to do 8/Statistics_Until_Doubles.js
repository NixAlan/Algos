//Statistics Until Doubles
//Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers
//between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
//Display number of rolls, min, max, and average.

function roll() {
  return Math.floor(Math.random() * 21);
}

function untilDoubles() {
  var lastRoll = roll();
  var newRoll = roll();
  var pastRolls = [];
  var min = lastRoll;
  var max = newRoll;
  var sum = lastRoll + newRoll;
  var rollCount = 2;

  pastRolls.push(lastRoll);
  pastRolls.push(newRoll);
  if (lastRoll === newRoll) {
    console.log(
      `Number of Rolls ${rollCount}, The Min Roll is ${min}, The Max Roll is ${max}, The Average of the rolls are ${
        sum / rollCount
      }`
    );
  }
  if (max < min) {
    varTempNum = max;
    max = min;
    min = varTempNum;
  }

  while (lastRoll != newRoll) {
    lastRoll = newRoll;
    newRoll = roll();
    pastRolls.push(newRoll);
    rollCount++;
    if (newRoll > max) {
      max = newRoll;
    }
    if (newRoll < min) {
      min = newRoll;
    }
  }

  for (let i = 2; i < pastRolls.length; i++) {
    sum = sum + pastRolls[i];
  }
  console.log(
    `Number of Rolls ${rollCount}, The Min Roll is ${min}, The Max Roll is ${max}, The Average of the rolls are ${
      sum / rollCount
    }`,
    pastRolls,
    sum
  );
}

untilDoubles();
