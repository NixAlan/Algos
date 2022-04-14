var numArr = [1, 2, 3];
var toAdd = 0;

function pushFront(arr, num) {
  var tempArr = [];
  tempArr[0] = num;
  for (let i = 0; i < arr.length; i++) {
    tempArr[i + 1] = arr[i];
  }
  numArr = tempArr;
}
pushFront(numArr, toAdd);
console.log(numArr);
