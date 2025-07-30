let tree;
let max_dist = 50;
let min_dist = 5;

function setup() {
  createCanvas(400, 400, WEBGL);
  // frameRate(5);
  tree = new Tree();
}

function draw() {
  background(51);
  orbitControl();
  tree.show();
  tree.grow();
}
