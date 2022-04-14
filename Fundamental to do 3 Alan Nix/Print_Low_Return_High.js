//Create a function that takes an array of numbers. The function should print the lowest value in the array,
//and return the highest value in the array.
var arrNum = [1, 2, 3, 4, 5];
var arrNum1 = [5, 4, 3, 2, 1];
var arrNum2 = [6, 1, 2, 5, 6, 5, 1];
var arrNum3 = [0];
var low = 0;
var high = 0;

function highLow(arr) {
  let i = 0;
  let j = 0;
  low = arr[i];
  while (i < arr.length) {
    if (low > arr[i]) {
      low = arr[i];
      i++;
    } else {
      low = low;
      i++;
    }
  }
  while (j < arr.length) {
    if (high < arr[j]) {
      high = arr[j];
      j++;
    } else {
      high = high;
      j++;
    }
  }
  console.log("The Low Number is " + low);
  return high;
}
// var x = highLow(arrNum);
// console.log(x);
// var x1 = highLow(arrNum1);
// console.log(x1);
// var x2 = highLow(arrNum2);
// console.log(x2);
var x3 = highLow(arrNum3);
console.log(x3);
