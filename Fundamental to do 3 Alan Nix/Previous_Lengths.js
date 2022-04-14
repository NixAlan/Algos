var textArr = ["abcd", "abcde", "abcdef"];

function textLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    textArr[i] = textArr[i].length;
  }
  console.log(textArr);
}
textLength(textArr);
