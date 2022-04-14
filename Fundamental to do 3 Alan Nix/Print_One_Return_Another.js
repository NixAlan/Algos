//Build a function that takes an array of numbers. The function should print the second-to-last value in the array,
//and return first odd value in the array.

numArr = [2, 4, 5, 8, 10, 12];

function printReturn(arr) {
  console.log(arr[arr.length - 2]);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
  console.log("there are not any odd numbers in the array");
}

var x = printReturn(numArr);
console.log(x);
