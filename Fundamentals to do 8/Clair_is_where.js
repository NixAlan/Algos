//Claire is Where?
//On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions
//(reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset()
//moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions.
//Finally, xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively.
//After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

//Second: create distFromHome(). Assuming she moves diagonally, return her distance from home.

class location {
  constructor(xlocation, ylocation) {
    this.xlocation = xlocation;
    this.ylocation = ylocation;
  }
  reset() {
    this.xlocation = 0;
    this.ylocation = 0;
  }
  move(x, y) {
    this.xlocation = this.xlocation + x;
    this.ylocation = this.ylocation + y;
  }
  xlocation() {
    return this.xlocation;
  }
  ylocation() {
    return this.ylocation;
  }
  distFromHome() {
    if (Math.abs(this.xlocation) > Math.abs(this.ylocation)) {
      return `Clair is ${Math.abs(this.xlocation)} from home`;
    } else {
      return `Clair is ${Math.abs(this.ylocation)} from home`;
    }
  }
}

let claireLocation = new location(0, 0);
claireLocation.move(1, -2);
claireLocation.move(3, 1);
claireLocation.move(10, 10);
console.log("clairs xlocation is " + claireLocation.xlocation);
console.log("clairs ylocation is " + claireLocation.ylocation);
console.log(claireLocation.distFromHome());
claireLocation.reset();
console.log(claireLocation.xlocation, claireLocation.ylocation);
