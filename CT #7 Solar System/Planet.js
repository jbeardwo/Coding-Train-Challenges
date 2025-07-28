class Planet{
  constructor(r, d, os, a){
    this.radius = r;
    this.distance = d;
    this.angle = a;
    this.planets = [];
    this.orbitSpeed = os;
  }
  
  spawnMoons(total, level){
    let curLevel = level;
    for(let i=0;i<total;i++){
      let r = this.radius / (level * 2);
      let d = random(50, 150);
      let os = random(-0.1, 0.1);
      let a = random(0, TWO_PI);
      this.planets.push(new Planet(r, d/level, os, a));
      if(curLevel<3){
        let num = Math.floor(random(0,4));
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
    rotate(this.angle);
    translate(this.distance,0);
    
    fill(255);
    ellipse(0, 0, this.radius * 2, this.radius*2);
    
    
    
    for (let i in this.planets) {
      this.planets[i].show();
    }
    
    pop();
    
  }
  
  
  
}