class Drop{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 4;
    this.toDelete = false;
  }
  
  show(){
    noStroke();
    fill(50, 0, 200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  move() {
    this.y = this.y - 15
  }
  
  hits(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if(d<this.r + flower.r){
      return true;   
    }else{
      return false;
    }
  }
  
  evap(){
    this.toDelete = true;
  }

}