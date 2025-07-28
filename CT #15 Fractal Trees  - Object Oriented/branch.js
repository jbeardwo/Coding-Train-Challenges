
class Branch{
    constructor(begin, end){
        this.begin = begin;
        this.end = end;
        this.grown = false;
    }

    show(){
        stroke(100,255,100);
        line(this.begin.x, this.begin.y, this.begin.z, this.end.x, this.end.y, this.end.z);
    }

    jitter(){
        stroke(255);
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
        this.end.z += random(-1, 1);

    }

    branchA(){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir = rotateAroundY(dir, yRot);
        dir = rotateAroundZ(dir, angle);
        dir = rotateAroundX(dir, angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end,dir);
        var right = new Branch(this.end, newEnd); 
        return right;
    }

    branchB(){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir = rotateAroundY(dir, yRot);
        dir = rotateAroundZ(dir, -angle);
        dir = rotateAroundY(dir, -angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end,dir);
        var left = new Branch(this.end, newEnd); 
        return left;
    }

    branchC(){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir = rotateAroundY(dir, yRot);
        dir = rotateAroundX(dir, -angle);
        dir = rotateAroundY(dir, angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end,dir);
        var third = new Branch(this.end, newEnd); 
        return third;
    }

}