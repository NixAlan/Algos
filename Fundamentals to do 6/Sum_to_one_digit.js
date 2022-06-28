//Sum to One Digit
//Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s
//digits repeatedly until the sum is only one digit. Return that one-digit result.

//Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function sumToOne(num) {
  var numString = num.toString();
  var tempSum = 0;
  for (let i = 0; i < numString.length; i++) {
    //console.log(numString[i]);
    tempSum = tempSum + parseInt(numString[i]);
  }
  console.log(tempSum);
  if (tempSum < 10) {
    return tempSum;
  } else {
    sumToOne(tempSum);
  }
}

sumToOne(1263);
