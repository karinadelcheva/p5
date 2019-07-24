var col = {
	r:255,
	g:0,
	b:0,
};

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  canvas.position(0,0)
  canvas.style("z-index", "-1");
}

function draw() {
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  
  let xloc = randomGaussian(0);
  let yloc = randomGaussian(0);

  let sd = 120;                // Define a standard deviation
  let mean = width/2;         // Define a mean value (middle of the screen along the x-axis)
  xloc = ( xloc * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

  col.r = random (100, 255); // Randomize colors
	col.g = (0);
	col.b = random (100, 200);
  fill(col.r, col.g, col.b, 120);

  noStroke();
  ellipse(xloc, height/2, yloc, width/2);   // Draw an ellipse at our "normal" random position
}

// TODO:
// - the headline creates a black line through which the algorithm doesn't pass;

