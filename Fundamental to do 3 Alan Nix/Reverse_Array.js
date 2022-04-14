var numArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function reverseArr(arr) {
  var tempArr = [];
  for (let i = arr.length - 1; i > -1; i--) {
    tempArr.push(arr[i]);
  }
  numArr = tempArr;
  console.log(numArr);
}
reverseArr(numArr);
