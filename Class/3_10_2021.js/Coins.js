//Given a positive integer representing a number of American cents, return an object of the most efficient way to create change.
//"Write a function that accepts an array, and tells me the largest value."

var qCount = 0;
var dCount = 0;
var nCount = 0;
var pCount = 0;

var num1 = 90;

function sort() {
  while (num >= 0) {
    if (num > 25) {
      console.log(num);
      num - 25;
      qCount++;
    } else if (num > 10) {
      num - 10;
      dcount++;
    } else if (num > 5) {
      num - 5;
      nCount++;
    } else {
      pcount = num;
      num - num;
    }
  }
}
sort(num1);

Console.log(qCount, dCount, nCount, pCount);
