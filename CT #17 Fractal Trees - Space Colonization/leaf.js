class Leaf{

    constructor(){
        this.pos = createVector(random(width),random(height-100));
    }

    show(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4, 4)
    }

}