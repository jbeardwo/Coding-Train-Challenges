let minval = -0.5;
let maxval = 0.5;

let minSlider ;
let maxSlider;


function setup() {
  createCanvas(400, 400);
  pixelDensity(1);

  minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);
  
}

function draw() {
  let maxIter = 100;
  loadPixels();
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){

      let a = map(x, 0, width, minSlider.value(), maxSlider.value());
      let b =  map(y, 0, width, minSlider.value(), maxSlider.value());

      let ca = a;
      let cb = b;

      let n = 0;
      while(n<maxIter){
        let aa = a * a - b * b;
        let bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if(a*a+b*b > 16){
          break;
        }

        n++;
      }

      let bright = map(n,0,maxIter,0,1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      if(n == maxIter){
        bright = 0;
      }

      let pix = (x+y*width)*4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
