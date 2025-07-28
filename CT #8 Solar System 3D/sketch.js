

let sun;
function setup() {
  
  createCanvas(600, 600, WEBGL);
  cam = createEasyCam({ distance: 500 });
  sun = new Planet(50, 0, 0, random(TWO_PI));
  sun.spawnMoons(5,1);
}

function draw() {
  background(0);
  lights();
  sun.show();
  sun.orbit();
  
}