class Cell{
  constructor(pos, r, c){
    if(pos) {
      this.pos = pos.copy();
    }else{
      this.pos = createVector(random(width),random(height));
    }
    this.vel = p5.Vector.random2D();
    this.r = r || 80;
    this.c = c || color(random(100,255),0,random(100,255), 100);
  }
  
  
  move(){
    this.vel = p5.Vector.random2D();
    this.pos.add(this.vel);
  }
  
  show(){
    noStroke();
    fill(this.c);
    ellipse(this.pos.x,this.pos.y,this.r,this.r)
  }
  
  clicked(x, y){
    let d = dist(this.pos.x, this.pos.y, x, y);
    if(d<this.r){
      return true;
    }else{
      return false;
    }
  }
  
  mitosis(){
    //this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  }
}