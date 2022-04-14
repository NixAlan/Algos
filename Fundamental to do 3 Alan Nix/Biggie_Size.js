//Given an array, write a function that changes all positive numbers in the array to “big”.
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

var numArr = [-1, 3, 5, -5];

function makeItBig(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
}
makeItBig(numArr);
console.log(numArr);
