//Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade,
//given an integer representing a score from 0 to 100?
//Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’.
//For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(num) {
  if (num > 89) {
    console.log(`Score: ${num}. Grade: A`);
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
