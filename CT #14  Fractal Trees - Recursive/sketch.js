
let slider;
let yRot;

function setup() {
  createCanvas(400, 400, WEBGL);
  slider = createSlider(0,TWO_PI,PI/8, .01);
  yRot = random(PI/3,PI/6);
}

function draw() {
  orbitControl();
  background(0);
  stroke(0,255,0);
  strokeWeight(2);
  slider.value()
  angle = slider.value();
  translate(0, height/2)
  branch(100);
}

function branch(len) {
  //offset each layer by a bit to avoid open spaces
  rotateY(yRot);
  
  line(0,0,0,-len);
  translate(0,-len);
  
  
  if(len > 8){
    if(len<30){
      stroke(255,0,255)
    }else{
      stroke(0,255,200)
    }
  
  push();
  rotateZ(angle);
  rotateX(angle);
  branch(0.67 * len);
  pop();
  
  push();
  rotateZ(-angle);
  rotateY(-angle);
  branch(0.67 * len);
  pop();
  
  push();
  rotateX(-angle);
  rotateY(angle);
  branch(0.67 * len);
  pop();
}
  
}