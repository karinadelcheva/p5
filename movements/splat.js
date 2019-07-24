function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  canvas.style("z-index", "-1");
}

function draw() {
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  
  let xloc = randomGaussian();

  let sd = 60;                // Define a standard deviation
  let mean = width/2;         // Define a mean value (middle of the screen along the x-axis)
  xloc = ( xloc * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

  fill(255, 10);
  noStroke();
  ellipse(xloc, height/2, 16, 16);   // Draw an ellipse at our "normal" random position
}

