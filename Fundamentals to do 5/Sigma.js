// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number
// (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
  var tempSum = 0;
  for (let i = 0; i < num + 1; i++) {
    tempSum = tempSum + i;
  }
  return tempSum;
}

console.log(sigma(10));
