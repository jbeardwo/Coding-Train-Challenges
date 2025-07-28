let cells = [];
let cellNum = 8;
function setup() {
  createCanvas(400, 400);
  for(let i=0;i<cellNum;i++){
    cells.push(new Cell());
  }
}

function draw() {
  background(220);
  for(let i = 0;i<cells.length;i++){
    cells[i].move();
    cells[i].show();
  }
}

function mousePressed(){
  for(let i = cells.length-1;i>=0;i--){
    if(cells[i].clicked(mouseX,mouseY)){
      let cellA = cells[i].mitosis();
      let cellB = cells[i].mitosis();
      cells.push(cellA);
      cells.push(cellB);
      cells.splice(i,1);
    }
  }
}