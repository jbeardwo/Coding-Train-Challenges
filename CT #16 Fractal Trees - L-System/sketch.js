let axiom = "F";
let sentence = axiom;
let len = 100;
let angle = 0;
let slider;

let rules = [];

rules.push({
  a: "F",
  b: " FF+[+F-F-F]-[-F+F+F]"

  // a: "F",
  // b: "FF+[+F-F-F]-[-F+F+F]"
  
  // a: "F+F+F+F",
  // b: "F+F-F-FF+F+F-F"
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

function turtle(){
  background(51);
  stroke(255,100);
  //resetMatrix();
  translate(0, height/2);
  for(let i = 0; i < sentence.length; i++){
    let current = sentence.charAt(i);

    if(current == "F"){
      line(0, 0, 0, -len);
      translate(0,-len);
    }else if(current == "+"){
      rotate(angle);
    }else if(current == "-"){
      rotate(-angle);
    }else if(current == "["){
      push();
    }else if(current == "]"){
      pop();
    }
  }
}

function setup() {
  angle = PI/8;
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
