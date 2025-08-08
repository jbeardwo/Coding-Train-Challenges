let total = 25;
let globe = [];
let radius = 200;
let m = 2;
let c1 = 7;
let c2 = 0.2;
let c3 = 1.7;
let c4 = 1.7;
let a = 1;
let b = 1;

let mSlider, c1Slider, c2Slider, c3Slider, c4Slider, aSlider, bSlider;

let mLabel, c1Label, c2Label, c3Label, c4Label, aLabel, bLabel;

function setup() {
  createCanvas(400, 400, WEBGL);
  colorMode(HSB);
  
  mLabel = createP('m: 2');
  mSlider = createSlider(0, 10, 2, 0.1);
  
  c1Label = createP('c1: 7');
  c1Slider = createSlider(0.1, 20, 7, 0.1);
  
  c2Label = createP('c2: 0.2');
  c2Slider = createSlider(0.1, 5, 0.2, 0.1);
  
  c3Label = createP('c3: 1.7');
  c3Slider = createSlider(0.1, 5, 1.7, 0.1);
  
  c4Label = createP('c4: 1.7');
  c4Slider = createSlider(0.1, 5, 1.7, 0.1);
  
  aLabel = createP('a: 1');
  aSlider = createSlider(0.1, 5, 1, 0.1);
  
  bLabel = createP('b: 1');
  bSlider = createSlider(0.1, 5, 1, 0.1);
}

function superShape(theta, m, n1, n2, n3){
  let t1 = abs((1/a)*cos(m * theta / 4));
  t1 = pow(t1,n2);
  let t2 = abs((1/b)*sin(m * theta / 4));
  t2 = pow(t2, n3);
  let t3 = t1 + t2;
  t3 = pow(t3, -1 / n1)
  return t3;
}

function draw() {
  m = mSlider.value();
  c1 = c1Slider.value();
  c2 = c2Slider.value();
  c3 = c3Slider.value();
  c4 = c4Slider.value();
  a = aSlider.value();
  b = bSlider.value();
  
  mLabel.html('m: ' + m.toFixed(1));
  c1Label.html('c1: ' + c1.toFixed(1));
  c2Label.html('c2: ' + c2.toFixed(1));
  c3Label.html('c3: ' + c3.toFixed(1));
  c4Label.html('c4: ' + c4.toFixed(1));
  aLabel.html('a: ' + a.toFixed(1));
  bLabel.html('b: ' + b.toFixed(1));
  
  background(0);
  noFill();
  lights();
  orbitControl();

  for(let i = 0; i <= total+1; i++){
    globe[i] = [];
    let lat = map(i, 0, total, -HALF_PI, HALF_PI);
    let r2 = superShape(lat, m, c1, c2, c3);
    for(let j = 0; j <= total+1; j++){
      
      let lon = map(j, 0, total, -PI, PI);
      let r1 = superShape(lon, m, c1, c2, c3);
     
      let x = radius * r1 * cos(lon) * r2 * cos(lat);
      let y = radius * r1 * sin(lon) * r2 * cos(lat);
      let z = radius * r2 * sin(lat);
      let v = createVector(x,y,z);
      globe[i][j] = v;
    }
  }

  for(let i = 0; i < total; i++){
    beginShape(TRIANGLE_STRIP);
    for(let j = 0; j < total + 1; j++){
      let v1 = globe[i][j];
      stroke(255);
      strokeWeight(1);
      vertex(v1.x, v1.y, v1.z);
      let v2 = globe[i + 1][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }
}