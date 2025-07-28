class Planet{
  constructor(r, d, os, a){
    this.radius = r;
    this.distance = d;
    this.angle = a;
    this.planets = [];
    this.orbitSpeed = os;
    this.v = p5.Vector.random3D();
    this.v.mult(d);
  }
  
  spawnMoons(total, level){
    let curLevel = level;
    for(let i=0;i<total;i++){
      let r = this.radius / (level * 2);
      let d = random(this.radius + r,(this.radius + r)*2);
      let os = random(-0.05, 0.05);
      let a = random(0, TWO_PI);
      this.planets.push(new Planet(r, d, os, a));
      if(curLevel<3){
        let num =  Math.floor(random(0,4));
        this.planets[i].spawnMoons(num, level+1);
      }
    }
  }
  
  orbit(){
    this.angle += this.orbitSpeed;
    for(let i=0; i<this.planets.length; i++){
      this.planets[i].orbit();
    }
  }
  
  show(){
    push();
    
    noStroke();
    fill(200);
    
    
    
    let tempV = createVector(1,0,1);
    let perp = this.v.cross(tempV);
    if (perp.x != 0 || perp.y != 0 || perp.z != 0) { 
      rotate(this.angle, perp);
    }
    stroke(255);
    //line(0, 0, 0, this.v.x, this.v.y, this.v.z);
    //line(0, 0, 0, perp.x, perp.y, perp.z);
    translate(this.v.x, this.v.y, this.v.z);
    noStroke();
    sphere(this.radius);
    
    
    for (let i in this.planets) {
      this.planets[i].show();
    }
    
    stroke(255);
    
    
    pop();
    
  }
  
  
  
}