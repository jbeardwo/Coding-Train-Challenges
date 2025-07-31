

let angle = 0;
let maxIter = 100;

const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];


function setup() {
  createCanvas(600, 800);
  colorMode(HSB, 1);  
  for (let n = 0; n < maxIter; n++) {
    // Gosh, we could make fancy colors here if we wanted
    let hu = sqrt(n / maxIter);
    let col = color(hu, 255, 150);
    colorsRed[n] = red(col);
    colorsGreen[n] = green(col);
    colorsBlue[n] = blue(col);
  }
}

function draw() {

  // let ca =map(mouseX, 0, width, -1, 1);
  // let cb =map(mouseY, 0, height, -1, 1);

  // let ca = -0.8;
  // let cb = 0.156;

  let ca = sin(angle);
  let cb = cos(angle);

  angle += 0.08;
 
  background(255);
  // let w = abs(sin(angle))*5;
  let w = 5;
  let h = (w*height) / width;
  let xmin = -w/2;
  let ymin = -h/2;
  
  loadPixels();



  let xmax = xmin + w;
  let ymax = ymin + h;

  let dx = (xmax - xmin) / (width);
  let dy = (ymax - ymin) / (height);

  let y = ymin;
  for(let j = 0; j < height; j++){
    let x = xmin;
    for(let i = 0; i < width; i++){

      let a = x;
      let b = y; 

      let n = 0;
      while(n<maxIter){
        let aa = a * a;
        let bb = b * b;
        if(aa+bb > 4.0){
          break;
        }
        let twoab = 2.0 * a * b;

        a = aa - bb + ca;
        b = twoab + cb;

        

        n++;
      }

      let pix = (i+j*width)*4;
      if(n == maxIter){
        
        pixels[pix + 0] = 0;
        pixels[pix + 1] = 0;
        pixels[pix + 2] = 0;
        pixels[pix + 3] = 1;
      }else{
        let hu = map(n, 0, maxIter, 0, 1); 
        pixels[pix + 0] = colorsRed[n];
        pixels[pix + 1] = colorsGreen[n];
        pixels[pix + 2] = colorsBlue[n];
      }

      
       x += dx;
    }
    y+= dy;
  }
 
  updatePixels();
}
