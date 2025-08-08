let n1slider;
let n2slider;
let n3slider;
let mslider;
let aslider;
let bslider;

let n1 = 1;
let n2 = 1;
let n3 = 1;
let m = 5;
let a = 1;
let b = 1;

let radius = 100;
let totalPoints = 500;
let revs = 2;


function setup() {
  createCanvas(400, 400);
  n1slider = createSlider(0.1, 10, 1.0, 0.1); 
  n2slider = createSlider(0.1, 10, 1.0, 0.1);
  n3slider = createSlider(0.1, 10, 1.0, 0.1); 
  mslider = createSlider(1, 20, 4, 0.5);  
  aslider = createSlider(0.1, 3, 1.0, 0.1); 
  bslider = createSlider(0.1, 3, 1.0, 0.1);  
}

function superShape(angle){
  let r = 1;
  let part1 = (1 / a) * cos(angle * m / 4);
  part1 = pow(abs(part1),n2);
  let part2 = (1 / b) * sin(angle * m / 4);
  part2 = pow(abs(part2),n3);
  let part3 = pow(part1 + part2, n1);
  r = 1 / part3;
  if(part3 === 0){
    return 0;
  }    
  return r;
}

function draw() {
  n1 = n1slider.value();
  n2 = n2slider.value();
  n3 = n3slider.value();
  m = mslider.value();
  a = aslider.value();
  b = bslider.value();
  background(51);
  translate(width/2, height/2);

  stroke(255);
  noFill();

  let increment = TWO_PI / totalPoints;
  beginShape();
  for(let theta = 0; theta < TWO_PI * revs; theta += increment){
    let r = radius * superShape(theta);
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x,y);
  }
  endShape(CLOSE);
}
