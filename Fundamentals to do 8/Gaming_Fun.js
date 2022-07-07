//Gaming Fun(damentals)
//It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

//Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

//Second, create a function playFives(num), which should call rollOne() multiple times –  ‘num' times, in fact, where 'num'
//is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5,
//also print “That’s good luck!”

//Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call).
//After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.

//Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end (in addition to printing
//high/low rolls), it also prints the total sum of all eight rolls.

//Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many times as you want,
// instead of always doing this eight times.

//Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end instead of the total sum,
//it prints the average roll.

function rollOne() {
  return Math.floor(Math.random() * 7);
}

function playFives(num) {
  for (let i = 0; i < num; i++) {
    var tempRoll = rollOne();
    if (tempRoll === 5) {
      console.log(`${tempRoll} is a lucky number`);
    } else {
      console.log(tempRoll);
    }
  }
}

//playFives(5);

function playStatistics() {
  var high = rollOne();
  var low = rollOne();
  if (high < low) {
    var tempLow = high;
    high = low;
    low = tempLow;
  }
  for (let i = 0; i < 6; i++) {
    var tempRoll = rollOne();
    if (tempRoll > high) {
      high = tempRoll;
    } else {
      if (tempRoll < low || tempRoll === 0) low = tempRoll;
    }
  }
  console.log(`The High is ${high}, The Low is ${low}`);
}

//playStatistics();

function playStatisticsSum() {
  var high = rollOne();
  console.log(high);
  var low = rollOne();
  console.log(low);
  var sum = high + low;
  if (high < low) {
    var tempLow = high;
    high = low;
    low = tempLow;
  }
  for (let i = 0; i < 6; i++) {
    var tempRoll = rollOne();
    sum = sum + tempRoll;
    console.log(`the roll is ${tempRoll}`);
    if (tempRoll > high) {
      high = tempRoll;
    } else {
      if (tempRoll < low || tempRoll === 0) low = tempRoll;
    }
  }
  console.log(
    `The High is ${high}, The Low is ${low}, The sum of the Rolls is ${sum}`
  );
}

//playStatisticsSum();

function playStatisticsNum(num) {
  if (num < 2) {
    console.log("Num must be greater than 2");
  } else {
    var high = rollOne();
    console.log(high);
    var low = rollOne();
    console.log(low);
    var sum = high + low;
    if (high < low) {
      // switch hign and low if High is less than low
      var tempLow = high;
      high = low;
      low = tempLow;
    }
    if (num >= 3) {
      for (let i = 0; i < num - 2; i++) {
        var tempRoll = rollOne();
        sum = sum + tempRoll;
        console.log(`the roll is ${tempRoll}`);
        if (tempRoll > high) {
          high = tempRoll;
        } else {
          if (tempRoll < low || tempRoll === 0) low = tempRoll;
        }
      }
    }
  }
  console.log(
    `The High is ${high}, The Low is ${low}, The sum of the Rolls is ${sum}`
  );
}

//playStatisticsNum(4);

function playStatisticsAve(num) {
  if (num < 2) {
    console.log("Num must be greater than 2");
  } else {
    var high = rollOne();
    console.log(high);
    var low = rollOne();
    console.log(low);
    var sum = high + low;
    if (high < low) {
      // switch hign and low if High is less than low
      var tempLow = high;
      high = low;
      low = tempLow;
    }
    if (num >= 3) {
      for (let i = 0; i < num - 2; i++) {
        var tempRoll = rollOne();
        sum = sum + tempRoll;
        console.log(`the roll is ${tempRoll}`);
        if (tempRoll > high) {
          high = tempRoll;
        } else {
          if (tempRoll < low || tempRoll === 0) low = tempRoll;
        }
      }
    }
  }
  console.log(
    `The High is ${high}, The Low is ${low}, The average of the Rolls is ${
      sum / num
    }`
  );
}

playStatisticsAve(4);

console.log(rollOne());
