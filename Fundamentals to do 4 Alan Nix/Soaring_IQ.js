//Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student,
// Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day,
//then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98
//on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

var iQ = 101;
tempIQ = 0.01;

for (let i = 0; i < 98; i++) {
  iQ = iQ + tempIQ;
  tempIQ = tempIQ + 0.01;
  console.log(tempIQ);
}
console.log(iQ);
