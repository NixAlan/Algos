numarr = [1, 3, 5, 7, 9, 13];

function greaterThanSecond(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}

var x = greaterThanSecond(numarr);
console.log(x);
