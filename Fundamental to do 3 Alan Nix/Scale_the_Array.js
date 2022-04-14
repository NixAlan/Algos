//Given array arr and number num, multiply each arr value by num, and return the changed arr.

var numArr = [1, 2, 3, 4, 5];

function Scale(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    numArr[i] = numArr[i] * num;
  }
  return arr;
}

console.log(Scale(numArr, 5));
