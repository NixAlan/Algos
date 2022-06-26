//Generate Coin Change
//Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents,
//compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent),
// nickels (5 cents), dimes (10 cents), and quarters (25 cents).

//Example output, given (94):

//94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4copy
// Second: can you simplify/shorten your code?

//Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

function change(cents) {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  while (cents > 0) {
    if (cents > 25) {
      quarters += 1;
      cents = cents - 25;
    } else if (cents > 10) {
      dimes += 1;
      cents = cents - 10;
    } else if (cents > 5) {
      nickels += 1;
      cents = cents - 5;
    } else {
      pennies = cents;
      cents = 0;
      console.log(quarters);
      console.log(dimes);
      console.log(nickels);
      console.log(pennies);
    }
  }
}

change(93);
