var numArr = [1, 2, 3, 4, 5];

function rotateArr(arr, move) {
  var tempFront = 0;
  for (let i = 0; i < move; i++) {
    tempFront = arr[arr.length - 1];
    for (let k = arr.length - 2; k > -1; k--) {
      arr[k + 1] = arr[k];
    }
    arr[0] = tempFront;
  }
}

rotateArr(numArr, 2);
console.log(numArr);
