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
    console.log(`Score: ${num}. Grade: B`);
  } else if (num > 69 && num < 80) {
    console.log(`Score: ${num}. Grade: C`);
  } else if (num > 59 && num < 70) {
    console.log(`Score: ${num}. Grade: D`);
  } else {
    console.log(`Score: ${num}. Grade: F`);
  }
}

letterGrade(90);

function accurateGrade(num) {
  console.log("devlog", num);
  switch (num) {
    case (num = 91):
    case (num = 92):
      console.log(`Score: ${num}. Grade: A-`);
      break;
    case {num > 9}3:
      console.log(`Score: ${num}. Grade: A`);
      break;
    default:
      console.log(`Score: ${num}. Grade: B`);
  }
}

accurateGrade(99);
