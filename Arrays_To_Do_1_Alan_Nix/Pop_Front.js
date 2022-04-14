var numArr = [1, 2, 3, 4];

function popFront(arr) {
  var tempVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  numArr.pop();
  return tempVal;
}

var x = popFront(numArr);
console.log(x, numArr);
