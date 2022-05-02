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
      case 80:
      case 81:
        console.log(`Score: ${num}. Grade: B-`);
        break;
      case 88:
      case 89:
        console.log(`Score: ${num}. Grade: B+`);
        break;
      default:
        console.log(`Score: ${num}. Grade: B`);
    }
  } else if (num > 69 && num < 80) {
    switch (num) {
      case 70:
      case 71:
        console.log(`Score: ${num}. Grade: C-`);
        break;
      case 78:
      case 79:
        console.log(`Score: ${num}. Grade: C+`);
        break;
      default:
        console.log(`Score: ${num}. Grade: C`);
    }
  } else if (num > 59 && num < 70) {
    switch (num) {
      case 60:
      case 61:
        console.log(`Score: ${num}. Grade: D-`);
        break;
      case 68:
      case 69:
        console.log(`Score: ${num}. Grade: D+`);
        break;
      default:
        console.log(`Score: ${num}. Grade: D`);
    }
  } else {
    console.log(`Score: ${num}. Grade: F`);
  }
}

letterGrade(50);
letterGrade(51);
letterGrade(55);
letterGrade(58);
letterGrade(59);
