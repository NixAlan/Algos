//Is Prime
//Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1.
//Many highly optimized solutions exist, but for now, just create one that is easy to understand and debug.

function isPrime(num) {
  var divisibleCount = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisibleCount = divisibleCount + 1;
    }
    if (divisibleCount > 2) {
      console.log(`number ${num} is not a prime number`);
      break;
    }
  }
  if (divisibleCount === 2) {
    console.log(`number ${num} is a prime number`);
  }
}

isPrime(250);
