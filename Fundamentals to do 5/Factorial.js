//Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product
//(multiplication) of all positive integers from 1 up to number (inclusive).

//For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num) {
  var tempFac = 1;
  for (let i = 1; i < num + 1; i++) {
    tempFac = tempFac * i;
  }
  return tempFac;
}

console.log(factorial(5));
