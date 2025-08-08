let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let fr;
let numParticles = 100;
let particles = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl);
  rows = floor(height/ scl);
  fr = createP('');
  for(let i = 0; i< numParticles; i++){
    particles[i] = new Particle();
  }
}



function draw() {
  background(0);
  let yoff = 0;
  for(let y = 0; y < rows; y++) {
    let xoff = 0;
    
    for(let x = 0; x < cols; x++) {
      let index =  ( x + y * width  ) * 4
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);

      xoff+= inc;

      stroke(255);

      push();

      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);

      pop();
    }
    yoff += inc;
    
  }
  zoff += 0.01
  for(let i = 0; i < particles.length; i++){
    particles[i].show();
    particles[i].update();
  }
  fr.html(floor(frameRate()));

}
