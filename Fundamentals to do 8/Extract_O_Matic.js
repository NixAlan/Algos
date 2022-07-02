//Extract-o-matic
//Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit.
//0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7),
//return 0.

function extractDigit(num, index) {
  var numLength = num.toString();
  if (index >= numLength.length) {
    return console.log("Enter index less then number length");
  } else {
    var div = 0;
    console.log(div);
    if (index === 0) {
      var div = 1;
    } else {
      div = 1;
      for (let i = 0; i < index; i++) {
        console.log("fire");
        var mult = 10;
        div = div * mult;
        mult = mult * 10;
      }
    }
    console.log(num / div, div);
    return Math.floor((num / div) % 10);
  }
}

console.log(extractDigit(1234, 4));

// 1234 ,
//0 returns 4
//1 return 3
//2 return 2
//3 return 1
