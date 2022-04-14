// Given an array, create and return a new one containing all the values of the provided array, made negative
//(not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

var numArr = [1, -3, 5];

function Negative(arr) {
  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(-arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(Negative(numArr));
