//Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
//that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees.
//For review, Fahrenheit = (9/5 * Celsius) + 32.

var fahrenheitDegree = 32;

function fahrenheitToCelsius(fDegree) {
  var cDegree = 0;
  cDegree = (fDegree - 32) * 0.5555;
  console.log(cDegree);
}

fahrenheitToCelsius(100);
