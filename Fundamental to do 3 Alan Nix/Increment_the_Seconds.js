var numArr = [1, 2, 3, 4, 5];

function incrementTheSeconds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      numArr[i] = numArr[i] + 1;
    }
  }
  console.log(numArr);
}

incrementTheSeconds(numArr);
