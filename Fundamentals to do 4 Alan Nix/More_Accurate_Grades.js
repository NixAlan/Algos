//For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+”
//signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+).
//Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

function letterGrade(num) {
  if (num > 89) {
    if (num === 90 || num === 91) {
      console.log(`Score: ${num}. Grade: A-`);
    } else {
      console.log(`Score: ${num}. Grade: A`);
    }
  } else if (num > 79 && num < 90) {
    switch (num) {
      case (num = 80):
      case (num = 81):
        console.log(`Score: ${num}. Grade: B-`);
        break;
      case (num = 88):
      case (num = 89):
        console.log(`Score: ${num}. Grade: B+`);
        break;
      default:
        console.log(`Score: ${num}. Grade: B`);
    }
  } else if (num > 69 && num < 80) {
    switch (num) {
      case (num = 70):
      case (num = 71):
        console.log(`Score: ${num}. Grade: C-`);
        break;
      case (num = 78):
      case (num = 79):
        console.log(`Score: ${num}. Grade: C+`);
        break;
      default:
        console.log(`Score: ${num}. Grade: C`);
    }
  } else if (num > 59 && num < 70) {
    switch (num) {
      case (num = 60):
      case (num = 61):
        console.log(`Score: ${num}. Grade: D-`);
        break;
      case (num = 68):
      case (num = 69):
        console.log(`Score: ${num}. Grade: D+`);
        break;
      default:
        console.log(`Score: ${num}. Grade: D`);
    }
  } else {
    console.log(`Score: ${num}. Grade: F`);
  }
}

letterGrade(78);

// function accurateGrade(num) {
//   console.log("devlog", num);
//   switch (num) {
//     case (num = 91):
//     case (num = 92):
//       console.log(`Score: ${num}. Grade: A-`);
//       break;
//     case {num > 9}3:
//       console.log(`Score: ${num}. Grade: A`);
//       break;
//     default:
//       console.log(`Score: ${num}. Grade: B`);
//   }
// }

// accurateGrade(99);
