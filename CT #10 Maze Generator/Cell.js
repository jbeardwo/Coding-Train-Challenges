class Cell{
  
  constructor(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]; //top right bottom left
    this.visited = false;
  }
  
  checkNeighbors(){
    var neighbors = [];
    let top = grid[index(this.i, this.j-1)];
    let right = grid[index(this.i+1, this.j)];    
    let bottom = grid[index(this.i,this.j+1)];
    let left = grid[index(this.i-1, this.j)];

    if(top && !top.visited){
        neighbors.push(top);
    }
    if(right && !right.visited){
        neighbors.push(right);
    }
    if(bottom && !bottom.visited){
        neighbors.push(bottom);
    }
    if(left && !left.visited){
        neighbors.push(left);
    }

    if(neighbors.length>0){
        let r = floor(random(neighbors.length))
        return neighbors[r];       
    }else{
        return undefined;
    }
    

  }

  highlight(){
    var x = this.i * w;
    var y = this.j * w; 
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  }

  show(){
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    // noFill();
    // rect(x,y,w,w);
    //top
    if(this.walls[0]){line(x, y, x+w, y);}
    //right
    if(this.walls[1]){line(x+w, y, x+w, y+w);}
    //bottom
    if(this.walls[2]){line(x+w, y+w, x, y+w);}
    //left
    if(this.walls[3]){line(x, y+w, x, y);}

    if(this.visited){
        noStroke();
        fill(255, 0, 255, 100);
        rect(x, y, w, w)
    }
  }

}