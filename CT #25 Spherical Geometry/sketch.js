
let total = 20;
let globe = [];
let r = 200;

function setup() {
  createCanvas(400, 400, WEBGL);
  colorMode(HSB);
  for(let i = 0; i <= total+1; i++){
    globe[i] = [];
    let lat = map(i, 0, total, 0, PI);
    for(let j = 0; j <= total+1; j++){
      
      let long = map(j, 0, total, 0, TWO_PI);
      
      let x = r * sin(lat) * cos(long);
      let y = r * sin(lat) * sin(long);
      let z = r * cos(lat);
      let v = createVector(x,y,z);
      globe[i][j] = v;
    }
  }
}

function draw() {
  background(0);
  noFill();
  lights();
  orbitControl();

  

  

  for(let i = 0; i <= total; i++){
    
    // if(i % 2 ==0){
    //   fill(0);
    // }else{
    //   fill(255);
    // }


    beginShape(TRIANGLE_STRIP);
    for(let j = 0; j < total + 1; j++){



      let v1 = globe[i][j]; // Copy the original
      stroke(255);
      strokeWeight(1);
      vertex(v1.x, v1.y, v1.z);
      let v2 = globe[i + 1][j];
      vertex(v2.x, v2.y, v2.z);

    }
    endShape();
    
    
  }
    
}
