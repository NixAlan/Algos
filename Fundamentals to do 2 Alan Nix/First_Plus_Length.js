somethingarr = [5, 10, 15];
somethingarr1 = [true, 10, 15];
somethingarr2 = [false, 10, 15];
somethingarr3 = ["five", 10, 15];

function fPL(arr) {
  return arr[0] + arr.length;
}

console.log(fPL(somethingarr));
console.log(fPL(somethingarr1));
console.log(fPL(somethingarr2));
console.log(fPL(somethingarr3));
