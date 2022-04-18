// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days,
// there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total).
// If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function poorKenny() {
  var toDay = 0;
  toDay = Math.floor(Math.random() * 100 + 1);
  if (toDay > 0 && toDay < 11) {
    console.log("Volcano");
  } else if (toDay > 10 && toDay < 26) {
    console.log("Tsunamis");
  } else if (toDay > 26 && toDay < 46) {
    console.log("Earthquake");
  } else if (toDay > 45 && toDay < 71) {
    console.log("Blizzard");
  } else {
    console.log("Meteor");
  }
}

poorKenny();
