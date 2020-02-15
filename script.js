// Initialize an array to hold each particle to be drawn
const particles = [];

// Create the canvas where particles are going to appear. Particles are going to fill the screen.
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // Define how many particles to be created to appear at the same time on the screen
  const particlesLength = Math.floor(window.innerWidth / 10);

  // Fill the array with all particles that it possible to create based on the width of the screen
  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(29, 2, 28);

  // Define coordinates and draw particles for each one of the array
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.connectParticles(particles.slice(index));
  });
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
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // Connect particles between them
  connectParticles(particles) {
    particles.forEach(particle => {
      // Define the distance between particles
      const distanceBetweenParticles = dist(
        this.pos.x,
        this.pos.y,
        particle.pos.x,
        particle.pos.y
      );

      // If the distance is less than a specific number we define, a line will be draw between the particles
      if (distanceBetweenParticles < 120) {
        stroke('rgba(255, 255, 255, 0.1)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
