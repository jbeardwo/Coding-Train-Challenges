class Box {
  
  constructor(x, y, z, size){
    this.position ={
      x: x,
      y: y,
      z: z
    };
    this.size = size;
  }
  
  generate(){
    let boxes = [];
    for(let x = -1; x < 2; x++){
       for(let y = -1; y < 2; y++){
          for(let z = -1; z < 2; z++){
            
            let sum = abs(x) + abs(y) + abs(z);
            
            let newSize = this.size/3;
            if(sum > 1){
              let b = new Box(this.position.x + x * newSize, this.position.y + y * newSize, this.position.z + z * newSize, newSize);
              boxes.push(b);
            }  
          }
       }   
    }
    return boxes;
  }
  
  show(){
    push();
    fill(255);
    translate(this.position.x,this.position.y,this.position.z);
    box(this.size);
    
    pop();
  }
}