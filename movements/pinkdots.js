var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);

  noStroke();
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 200);

  fill(col.r, col.g, col.b, 120);
  ellipse(spot.x, spot.y, 40, 40);
}
