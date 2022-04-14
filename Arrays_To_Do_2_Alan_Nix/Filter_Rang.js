var numArr = [4, 1, 5, 2, 3]; //4,2,3

function filterHighLow(arr, low, high) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === low || arr[i] === high) {
      arr[arr.length] = arr[i];
      arr.length--;

      if (arr[i + 1] === low || arr[i + 1] === high) {
        console.log("fire");
        arr[i] = arr[i + 2];
      } else {
        arr[i] = arr[i];
      }
    } else {
      arr[i] = arr[i];
    }
  }
  //   arr.length--;
}

filterHighLow(numArr, 1, 5);
console.log(numArr);
