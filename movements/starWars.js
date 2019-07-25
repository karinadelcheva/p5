let distribution = new Array(360);
let width = window.innerWidth;
let height = window.innerHeight - 60;
function setup() {
  createCanvas(width, height);
  for (let i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0, 300));
  }
  
}
function draw() {
  background(0);
  for (let i = 0; i < 445; i++) {
    let x = floor(randomGaussian(width/2, 1000));
    let y = floor(randomGaussian(height/2, 1000));
    ellipse(x, y, 1, 1);
    stroke(255)
  }
  translate(width / 2, height / 2);
  for (let i = 0; i < distribution.length; i++) {
    xloc = floor(randomGaussian(0));
    yloc = floor(randomGaussian(0));
    rotate(TWO_PI / distribution.length);
    stroke(255);
    let dist = abs(distribution[i]);
    line(xloc, yloc, dist, 0);
  }
}
