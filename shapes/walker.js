var w;

class Walker {
  constructor(height, width) {
    this.x = width / 2;
    this.y = height / 2;
  }
  display() {
    stroke(0);
    point(this.x, this.y);
  }
  step() {
    let choice = int(random(4));
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
function setup() {
  createCanvas(640, 360);
  // Create a walker object
  w = new Walker(640, 360);
  background(255);
}
function draw() {
  w.step();
  w.display();
}
