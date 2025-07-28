stars = [];
numStars = 800;
speed = 10;

function setup() {
  createCanvas(800, 800);
  for(let i = 0; i < numStars; i++){
    let star = new Star();
    stars.push(star);
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width/2, height/2);
  for(let i = 0; i< stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}



