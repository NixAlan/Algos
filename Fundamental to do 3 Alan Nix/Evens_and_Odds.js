var numArr = [
  1, 1, 1, 3, 2, 5, 2, 2, 2, 0, 0, 0, 5, 4, 6, 1, 1, 1, 5, 6, 8, 4, 4, 4,
];

function evensOdds(arr) {
  varEvenCount = 0;
  varOddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    } else if (arr[i] % 2 === 0) {
      varOddCount = 0;
      varEvenCount++;
      if (varEvenCount === 3) {
        console.log("Even More So");
        varEvenCount = 0;
      }
    } else {
      varEvenCount = 0;
      varOddCount++;
      if (varOddCount == 3) {
        console.log("thats odd");
        varOddCount = 0;
      }
    }
  }
}
evensOdds(numArr);
