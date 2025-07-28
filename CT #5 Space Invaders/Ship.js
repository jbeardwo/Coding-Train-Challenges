class Ship{
  constructor(){
    this.x = width / 2;
    this.y = height - 20;
    this.xdir = 0;
  }
  
  show(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, 20, 60);
  }
  
  move(){
    this.x = this.x + this.xdir * 5;
  }
  
  setDir(dir){
    this.xdir = dir;
  }
}