let ship;
let flowers = [];
let numFlowers = 6;
let drops = [];
// let numDrops = 5;
function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for(let i = 0;i < numFlowers;i++){
    flowers[i] = new Flower(i*80 + 80,60);
  }
  // for(let i = 0;i < numDrops;i++){
  //   drops[i] = new Drop(random(width),height-20);
  // }
  
}

function draw() {
  background(50);
  ship.show();
  ship.move();
  
  for(let i = 0;i < drops.length;i++){
    drops[i].show();
    drops[i].move();
    
    for(let j = 0;j<flowers.length;j++){
      if(drops[i].hits(flowers[j])){
        flowers[j].grow();
        drops[i].evap();
      }
    }
  }
  
  let edge = false;

  
  for(let i = 0;i < flowers.length;i++){
    flowers[i].move();
    flowers[i].show();
    if(flowers[i].x > width || flowers[i].x < 0){
      edge = true;
    }
  }
  for(let i = 0;i < flowers.length;i++){
    if(edge){
      flowers[i].shiftDown();
    }
  }
  
  
  for(let i = drops.length-1; i >= 0;i--){
    if(drops[i].toDelete){
      drops.splice(i,1);
    }
  }
}

function keyPressed() {
  if(key===' '){
    let drop = new Drop(ship.x, ship.y);
    drops.push(drop);
  }
  
  if(keyCode === RIGHT_ARROW){
    ship.setDir(1);
  }else if(keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
}

function keyReleased(){
  if(key!=' '){
    ship.setDir(0);
  }
}
