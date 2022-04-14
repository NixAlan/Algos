//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
//If no array elements are "food", then print "I'm hungry" once.

var newArr = ["food", 1, 2, 3, "food"];

function hungry(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
    } else {
      console.log("I'm hungry");
    }
  }
}

hungry(newArr);
