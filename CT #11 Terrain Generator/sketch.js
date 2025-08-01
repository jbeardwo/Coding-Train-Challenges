let cols, rows;
let scl = 20;
let terrain = [];
let w = 1400;
let h = 1000;
let time = 0;
function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0 //specify a default value for now
    }
  }
}

function draw() {

  let yoff = time; 
  for (var y = 0; y < rows; y++) {
    let xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff,yoff),0,1,-100,10); //specify a default value for now
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(0);
  translate(0,50)
  rotateX(PI/3);

  fill(0,30,5);
  translate(-w/2, -h/2)
  for( let y = 0; y< rows -1; y++){
    beginShape(TRIANGLE_STRIP);
    for(let x = 0; x< cols; x++) {

    
      stroke(255);

      //rect(x*scl, y*scl, scl, scl)
      let z = random();
      vertex(x*scl, y*scl,terrain[x][y]);
      vertex(x*scl, (y+1)*scl,terrain[x][y+1]);
    }
    endShape();
  }
  time -= .11;
}
