//added 3D to this one too
//spacebar to grow
//not sure how i feel about the random rotation right now
var tree = [];
var leaves = [];
let angle = 0;
let count = 0;
let time = 0;
let yRot = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
  angle = PI/8;
  var a = createVector(0, height/2, 0);
  var b = createVector(0, height/2-100, 0);
  let root = new Branch(a,b);
  tree[0] = root;
  //yRot = random(-PI/2,PI/2)
}

function keyPressed(){
  if(key === ' '){
    for(let i = tree.length-1; i >= 0; i--){
      if(!tree[i].finished){
        
        tree.push(tree[i].branchA());
       tree.push(tree[i].branchB());
        tree.push(tree[i].branchC());
        tree[i].finished = true;
      }
    }
  }

  count++;

  if(count >= 5){
    time = 0;
    for (var i = 0; i < tree.length; i++){
    if(!tree[i].finished){
      var leaf = tree[i].end.copy();
      leaves.push(leaf);
    }
    }
  }
}

function draw() {
  orbitControl();
  background(50);
  //time++; 
  // tree[1] = root.branchA();
  // tree[2] = root.branchB();
  for(let i = 0; i< tree.length; i++){
    tree[i].show();
    //tree[i].jitter();
  }
  for(let i = 0; i< leaves.length; i++){
    noStroke();
    fill(255, 0, 255, 80);
    push();
    translate(leaves[i].x, leaves[i].y + time, leaves[i].z);
    sphere(4);
    pop();
    if(leaves[i].y + time > height/2){ 
      leaves.splice(i,1);
    }
  }
}

function rotateAroundX(v, angle) {
  let newY = v.y * cos(angle) - v.z * sin(angle);
  let newZ = v.y * sin(angle) + v.z * cos(angle);
  return createVector(v.x, newY, newZ);
}

function rotateAroundY(v, angle) {
    let newX = v.x * cos(angle) + v.z * sin(angle);
    let newZ = -v.x * sin(angle) + v.z * cos(angle);
    return createVector(newX, v.y, newZ);
}        

function rotateAroundZ(v, angle) {
  let newX = v.x * cos(angle) - v.y * sin(angle);
  let newY = v.x * sin(angle) + v.y * cos(angle);
  return createVector(newX, newY, v.z);
}


