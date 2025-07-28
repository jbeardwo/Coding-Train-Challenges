

let sun;
const textures = [];

function preload(){
  sunTexture = loadImage('data/sun.jpg');
  textures[0] = loadImage('data/mars.jpg');
  textures[1] = loadImage('data/earth.jpg');
  textures[2] = loadImage('data/mercury.jpg');

}

function setup() {
  
  createCanvas(600, 600, WEBGL);
  cam = createEasyCam({ distance: 500 });
  sun = new Planet(50, 0, 0, sunTexture);
  sun.spawnMoons(5,1);
}

function draw() {
  background(0);
  pointLight(255,255,255,0,0,0);
  ambientLight(100)
  spotLight(255, 255, 255, 0, 0, 500, 0, 0, -1, PI / 32);
  sun.show();
  sun.orbit();
  
}