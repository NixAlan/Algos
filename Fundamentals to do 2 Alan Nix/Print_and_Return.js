numArr = [5, 10];

function printAndReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}

var x = printAndReturn(numArr);
console.log(x);
