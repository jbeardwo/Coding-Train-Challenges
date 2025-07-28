let a = 0;
let sponge = [];
let cube;

function setup() {
  createCanvas(400, 400, WEBGL);
  cube = new Box(0,0,0,200);
  sponge.push(cube);
}

function draw() {
  background(51);
  noStroke();
  noFill();
  lights();
  
 // translate(width/2,height/2);
  rotateX(a);
  rotateY(a*0.4);
  rotateZ(a*0.1);
  for( let b of sponge){
    b.show();
  }

  a += 0.01;
}

function mousePressed() {
  let next = [];
  for(let b of sponge){
    let newBoxes = b.generate();
    next.push.apply(next, newBoxes);
  }
  sponge = next;
}