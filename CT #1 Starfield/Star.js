class Star{
  constructor(){
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width);
    
    this.prevZ = this.z;
  }
  
  update(){
    this.z = this.z - speed;
    if(this.z < 1){
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
      this.z = random(width);

      this.prevZ = this.z;
    }
  }
  
  show(){
    fill(255);
    noStroke();
    let nextX = map(this.x/this.z, 0, 1, 0, width);
    let nextY = map(this.y/this.z, 0, 1, 0, height);
    
    let r = map(this.z, 0, width, 16, 0)
    //ellipse(nextX, nextY, r, r);
    
    var prevX =  map(this.x/this.prevZ, 0, 1, 0, width);
    var prevY =  map(this.y/this.prevZ, 0, 1, 0, width);
    
    this.prevZ = this.z;
    stroke(255);
    line(prevX, prevY, nextX, nextY);
  }
}