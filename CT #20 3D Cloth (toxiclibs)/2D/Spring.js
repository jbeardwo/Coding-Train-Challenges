class Spring extends VerletSpring2D {
    
    constructor(a, b){
        super(a, b, w, 0.8);
    }

    display(){
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}