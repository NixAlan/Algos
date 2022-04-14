var numArr = [4, 2, 1, 3, 5];
var min = numArr[0];
var index = 0;

function minToFront(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (min < arr[i]) {
      min = min;
    } else {
      min = arr[i];
      index = i;
    }
  }

  for (let j = index; j > -1; j--) {
    arr[j] = arr[j - 1];
  }
  arr[0] = min;
}

minToFront(numArr);
console.log(numArr);
