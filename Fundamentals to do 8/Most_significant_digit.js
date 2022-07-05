//Most Significant Digit
//If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant. Given a number of any size,
//return the most significant digit. If you already know what strings are, that’s great! However, don’t use them here :-).

//Hint: use WHILE to bring the most significant digit into a range where you can use the friendly modulus operator (%).
//The most significant digit is the leftmost non-zero digit of a number. Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.

function mostSignificantDigit(num) {
  while (num > 10 || num < 1) {
    if (num > 10) {
      num = num / 10;
    } else {
      num = num * 10;
    }
  }
  return Math.floor(num);
}
console.log(mostSignificantDigit(0.00987));

// 123
console.log(1.23);
console.log(Math.floor(1.23));
