var numArr = [1, 2, 3, 4]; //[1,2,0,3,4]

function insertAt(arr, val, index) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = val;
}

insertAt(numArr, 0, 2);
console.log(numArr);
