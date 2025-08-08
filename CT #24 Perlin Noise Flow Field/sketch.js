let inc = 0.01;
let scl = 1;
let cols, rows;
let zoff = 0;
let fr;
let numParticles = 100000;
let particles = [];
let flowfield = [];
let magnitude = 1;
let angleMult;
let globalSpeedLimit = 1;

function setup() {
  createCanvas(500, 500);
  cols = floor(width / scl);
  rows = floor(height/ scl);
  fr = createP('');
  angleMult = TWO_PI;


  for(let i = 0; i< numParticles; i++){
    particles[i] = new Particle();
  }
}



function draw() {
  // background(0);
  let yoff = 0;
  for(let y = 0; y < rows; y++) {
    let xoff = 0;
    
    for(let x = 0; x < cols; x++) {
      let index =   x + y * cols;
      let angle = noise(xoff, yoff, zoff) * angleMult;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(magnitude);
      flowfield[index] = v;

      xoff+= inc;

      stroke(210, 93, 93,140);

      push();
      strokeWeight(1);
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);

      pop();
    }
    yoff += inc;
    
  }
 // zoff += 0.003
  for(let i = 0; i < particles.length; i++){
    particles[i].show();
    particles[i].update();
    particles[i].follow(flowfield);
    particles[i].edges();
  }
  fr.html(floor(frameRate()));
  if(frameCount > 3600){
    noLoop();
    saveCanvas();
  }
}
