//Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
//if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
var numArr1 = [5, 10, 15];
var numArr2 = [5, 10, 15, 20, 25];
var numArr3 = [5, 10, 15, 20, 25, 30];

function fitTheFirstValue(arr) {
  if (arr[0] < arr.length) {
    console.log("Too small");
  } else if (arr[0] > arr.length) {
    console.log("Too big");
  } else {
    console.log("Just right");
  }
}

fitTheFirstValue(numArr1);
fitTheFirstValue(numArr2);
fitTheFirstValue(numArr3);
