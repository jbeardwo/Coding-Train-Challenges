class Snake {
  
  constructor(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }
  
  dir(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }
  
  eat(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d<1) {
      this.total++;
      return true;
    }else{
      return false;
    }
  }
  
  death() { 
    for( let i = 0; i<this.tail.length;i++){
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if(d<1){
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  
  update(){
    
    if(this.total=== this.tail.length){
      for(let i = 0; i < this.total - 1; i++){
        this.tail[i] = this.tail [i + 1];
      }
    }
    
    this.tail[this.total-1] = createVector(this.x,this.y);
    
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
    
    
  }
  
  show() {
    fill(255);
    
    for(let i = 0; i<this.total; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    
    rect(this.x, this.y, scl, scl);
  }
}