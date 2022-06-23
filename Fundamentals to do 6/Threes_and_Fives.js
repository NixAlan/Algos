// Threes and Fives
//Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both.
// the final sum in the console.

//Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range.
//Think of threesFives() as betterThreesFives(100,4000000).

function threesAndFives() {
  var sum = 0;
  for (i = 100; i < 4000001; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //console.log("fire both", i);
      continue;
    } else if (i % 3 === 0) {
      //console.log("fire 3s", i);
      sum = sum + i;
    } else if (i % 5 === 0) {
      //console.log("fire 5s", i);
      sum = sum + i;
    } else {
      continue;
    }
  }
  console.log(sum);
}

function betterThreesAndFives(start, end) {
  var sum = 0;
  for (i = start; i < end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //console.log("fire both", i);
      continue;
    } else if (i % 3 === 0) {
      //console.log("fire 3s", i);
      sum = sum + i;
    } else if (i % 5 === 0) {
      //console.log("fire 5s", i);
      sum = sum + i;
    } else {
      continue;
    }
  }
  console.log(sum);
}

betterThreesAndFives(10, 21);
