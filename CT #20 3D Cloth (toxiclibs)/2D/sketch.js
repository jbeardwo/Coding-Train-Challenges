let particles = [];
let springs = [];
let physics;
let cols = 40;
let rows = 40;

let w = 10;

function setup() {
  createCanvas(600, 600);
  
  physics = new VerletPhysics2D();
  let gravity = new Vec2D(0, 1);
  let gb = new GravityBehavior(gravity);
  physics.addBehavior(gb);

  let x = 10;
  let y = 10;
  for(let i = 0; i < cols; i++){
    particles[i] = []
    for(let j = 0; j < rows; j++){
      let p = new Particle(x,y);
      particles[i][j] = p;
      physics.addParticle(p);
      y = y + w;
    }
    y = 10;
    x = x + w;
  }

  for(let i = 0; i< cols-1; i++){
    for (let j = 0; j < rows-1; j++){
      let a = particles[i][j];
      let b1 = particles[i+1][j];
      
      let b2 = particles[i][j+1];
      
      let s1 = new Spring(a,b1,w,0.5);
      let s2 = new Spring(a,b2,w,0.5);
      springs.push(s1);
      physics.addSpring(s1);
      springs.push(s2);
      physics.addSpring(s2);
    }
  }

  particles[0][0].lock();
  particles[cols-1][0].lock();
}

function draw() {
  background(50);
   physics.update();
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      // particles[i][j].display()
    }
  }
  for(let i = 0; i < springs.length; i++){
    springs[i].display();
  }
}
