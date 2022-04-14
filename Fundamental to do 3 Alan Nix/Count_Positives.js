var numArr = [-1, 1, 1, 1];

function countPos(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  numArr[numArr.length - 1] = count;
  console.log(numArr);
}

countPos(numArr);
