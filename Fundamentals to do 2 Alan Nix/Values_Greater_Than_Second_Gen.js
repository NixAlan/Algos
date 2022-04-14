var numarr = [1, 3, 5, 7, 9, 13];
var numarr1 = [5];

function greaterThanSecond(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.length);
  return newArr;
}

greaterThanSecond(numarr1); //this prints 0 and returns an empty arr which fulfill the instructions
//var x = greaterThanSecond(numarr);
//console.log(x);
