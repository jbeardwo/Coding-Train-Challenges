let x = 0.01;
let y = 0;
let z = 0;


let sigma = 10;
let rho = 28;
let beta = 8/3;

let points = [];

function setup() {
  createCanvas(800, 600, WEBGL);
  
}

function draw() {
  orbitControl();
  background(50);
  let dt = .01;
  let dx = sigma * (y - x);
  let dy = x * (rho - z) - y;
  let dz = x * y - beta * z;
  x = x + dx * dt;
  y = y + dy * dt;
  z = z + dz * dt;
  points.push(createVector(x,y,z));
  scale(5);
  stroke(255);
  beginShape();
  noFill();
  let hu = 0;
  for(let i of points){
    stroke(hu, 255-hu, 255);
    vertex(i.x, i.y, i.z);

    let offset = createVector(0,0,0); 
    offset.mult(0.1);
    i.add(offset)

    hu += 1;
    if(hu>255){
      hu = 0;
    }
  }
  endShape();
}
