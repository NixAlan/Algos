var numArr1 = [1, 2, 3];
var numArr2 = [4, 5, 6];

function concat(arr1, arr2) {
  var newArr = [];
  var tempIndex = 0;
  for (let i = 0; i < arr1.length; i++) {
    newArr[tempIndex] = arr1[i];
    tempIndex++;
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr[tempIndex] = arr2[j];
    tempIndex++;
  }
  console.log(newArr);
}

concat(numArr1, numArr2);
