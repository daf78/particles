// Create a variable to hold each particle to be draw
let p;

// Create the canvas where particles are going to appear. Particles are going to fill the screen.
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Particle();
}

function draw() {
    background (29,2,28);
  p.update();
  p.draw();
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-2, 2), random(-2, 2));
    // Size
    this.size = 10;
  }

  // Update coordinates creating movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // Draw a single particle
  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // Detect edges for the particle not to go outside of the screen
  edges() {
      if(this.pos.x < 0 || this.pos.x > width) {
          this.vel.x *= -1;
      }

      if(this.pos.y < 0 || this.pos.y > height) {
          this.vel.y *= -1;
      }
  }
}
