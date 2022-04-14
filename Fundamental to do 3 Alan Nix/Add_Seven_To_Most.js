var numArr = [1, 2, 3, 4];
function addSeven(arr) {
  var sevenArr = [];
  for (let i = 0; i < arr.length; i++) {
    sevenArr[i] = arr[i] + 7;
  }
  console.log(sevenArr);
}
addSeven(numArr);
