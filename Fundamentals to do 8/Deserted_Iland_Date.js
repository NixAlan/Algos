//Date, on a Deserted Island
//After a particularly fabulous New Year’s Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island.
//He misses his home in Burbank, but at least now he can spend plenty of time outdoors – and you can’t beat the commute!
//To pass the time until he is rescued, he counts sunrises.

// 1. Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7,
//will console.log a string containing the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement.

// 2. Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365.
//Return weekday as before, given number of days total. "Sunday" still corresponds to 1.

// 3. Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365.
//Log each result string. If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, add "Enjoy your day off!"

// 4. Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number
//("May" corresponds to 5). Use an array, without loops.

function weekdayName2(weekdayNum) {
  if (weekdayNum > 365 || weekdayNum < 1) {
    console.log("input number between 1 and 365");
  } else {
    var weekday = weekdayNum % 7;
    day = "";
    switch (weekday) {
      case 1:
        day = "Sunday";
        return 1;
        break;
      case 2:
        day = "Monday";
        break;
      case 3:
        day = "Tuesday";
        break;
      case 4:
        day = "Wednesday";
        break;
      case 5:
        day = "Thursday";
        break;
      case 6:
        day = "Friday";
        break;
      case 0:
        day = "Saturday";
        break;
      default:
        day = "enter number between 1 and 7";
    }
    console.log(day);
    return day;
  }
}

//weekdayName2(366);
//weekdayName2(8);
//weekdayName2(15);
//weekdayName2(9);
//weekdayName2(16);
//weekdayName2(10);
//weekdayName2(17);
//weekdayName2(11);
//weekdayName2(18);

function someDays() {
  for (let i = 0; i < 17; i++) {
    day = weekdayName2(Math.floor(Math.random() * 366));
    if (
      day === "Monday" ||
      day === "Tuesday" ||
      day == "Wednesday" ||
      day === "Thursday" ||
      day === "Friday"
    ) {
      var phrase = "work hard";
      console.log(phrase);
    } else {
      phrase = "Enjoy your day off!";
      console.log(phrase);
    }
  }
}

someDays();

function monthName(monthNum) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNum > 12 || monthNum < 1) {
    console.log("input number between 1 and 12");
  } else {
    console.log(months[monthNum - 1]);
    return months[monthNum - 1];
  }
}

monthName(0);
monthName(13);
monthName(3);
monthName(4);
monthName(5);
monthName(6);
monthName(7);
monthName(8);
monthName(9);
monthName(10);
monthName(11);
monthName(12);
