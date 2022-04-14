var numArr = [1, 2, 3, 4, 5, 6, 7];
var iterate = numArr.length;
iterate = Math.floor(iterate / 2);
console.log(iterate);

function reverse(arr) {
  var tempVal;
  for (let i = 0; i < iterate; i++) {
    tempVal = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVal;
  }
}
reverse(numArr);
console.log(numArr);
