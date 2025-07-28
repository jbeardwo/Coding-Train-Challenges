let s;
let scl = 20;

let food;


function setup() {
  createCanvas(600, 600);
  frameRate(10);
  s = new Snake();
  pickLocation();
}

function pickLocation(){
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(55);
  s.update();
  s.show();
  
  if(s.eat(food)){
    pickLocation();
  }
  
  s.death();
  
  fill(255, 0, 100);
  rect(food.x,food.y, scl, scl);
}

function mousePressed(){
  s.total++;
}

function keyPressed() {
  if(keyCode ===UP_ARROW) {
    s.dir(0, -1);
  }else if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }else if(keyCode === LEFT_ARROW){
    s.dir(-1,0);
  }else if(keyCode === RIGHT_ARROW){
    s.dir(1,0);
  }
}

