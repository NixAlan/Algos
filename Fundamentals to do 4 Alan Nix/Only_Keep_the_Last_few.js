//Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount.
//Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter).
//Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

var numArr = [2, 4, 6, 8, 10];

function keepTheLast(arr, num) {
  tempDel = arr.length - num;
  for (let i = 0; i < num; i++) {
    arr[i] = arr[num + i - 1];
  }
  arr.length = arr.length - tempDel;
  return arr;
}

console.log(keepTheLast(numArr, 4));
