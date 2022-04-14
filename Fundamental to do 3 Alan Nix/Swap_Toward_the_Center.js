// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
testArr1 = [true, 42, "Ada", 2, "pizza"];
testArr2 = [1, 2, 3, 4, 5, 6];

function swapCenter(arr) {
  var tempNum = 0;
  var tempString = "";
  for (let i = 0; i < Math.floor(arr.length / 2); i = i + 2) {
    if (typeof arr[i] === "string") {
      tempString = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = tempString;
    } else {
      tempNum = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = tempNum;
    }
  }
}

swapCenter(testArr2);
console.log(testArr2);
