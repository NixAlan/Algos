var numArr = [1, 2, 3];

function double(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(double(numArr));
