let axiom = "F";
let sentence = axiom;
let len = 100;
let angle = 0;
let slider;
let rules = [];
let colorStack = [];
let greenStack = [];
let color = 255;
let green = 0;

rules.push({
  a: "F",
  b: "F[+FF][-FF]F[-F][+F]F"
});

function generate(){
  len = len * 0.5;
  let nextSentence = ""
  for(let i = 0; i< sentence.length; i++){
    let current = sentence.charAt(i);
    let found = false;
    for(let j = 0; j < rules.length; j++){
      if(current == rules[j].a){
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if(!found){
      nextSentence+=current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
}

function drawTurtle(){
  resetMatrix();
  translate(0, height/2);
  
  // Count total F's for scaling
  let totalF = 0;
  for(let i = 0; i < sentence.length; i++){
    if(sentence.charAt(i) == "F") totalF++;
  }
  
  // Reset colors at start
  colorStack = [];
  let fCount = 0;
  
  for(let i = 0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    if(current == "F"){
      // Calculate progress through all F's (0 to 1)
      let progress = fCount / totalF;
      
      // Use power function to spread colors better
      let colorProgress = pow(progress, 0.3);
      
      // Set brown/grey to green gradient
      let red = map(colorProgress, 0, 1, 139, 0);     
      let greenVal = map(colorProgress, 0, 1, 69, 255);   
      let blue = map(colorProgress, 0, 1, 19, 0);     
      
      stroke(red, greenVal, blue, 150);
      line(0, 0, 0, -len);
      translate(0,-len);
      
      fCount++;
    }else if(current == "+"){
      rotateX(angle);
    }else if(current == "-"){
      rotateX(angle);
      rotateY(PI/2);
    }else if(current == "["){
      push();
      colorStack.push(fCount);
    }else if(current == "]"){
      pop();
      fCount = colorStack.pop();
    }
  }
}

function turtle(){
  background(200);
  
  // Draw on right side
  push();
  translate(width/4, 0);
  drawTurtle();
  pop();
  
  // Draw mirrored on left side
  push();
  translate(-width/4, 0);
  scale(-1, 1, 1);
  drawTurtle();
  pop();
}

function setup() {
  angle = PI/100;
  background(51);
  createCanvas(400, 400, WEBGL);
  createP(axiom);
  
  var button = createButton("generate");
  button.mousePressed(generate);
  slider = createSlider(0,TWO_PI,PI/8, .01);
}

function draw() {
  orbitControl();
  turtle();
  angle = slider.value();
}