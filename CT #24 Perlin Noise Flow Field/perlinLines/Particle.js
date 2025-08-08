class Particle{

    constructor(){
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show(){
        stroke(255);
        point(this.pos.x, this.pos.y);
    }
}