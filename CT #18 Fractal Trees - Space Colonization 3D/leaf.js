class Leaf{

    constructor(){
        this.pos = createVector(random(-width/2,width/2),random(-height/2, 0), random(-width/2,width/2));
        this.reached = false;
    }

    show(){
        push();
        fill(255);
        noStroke();
        translate(this.pos.x, this.pos.y, this.pos.z)
        ellipse(0,0,4);
        pop();
    }

}