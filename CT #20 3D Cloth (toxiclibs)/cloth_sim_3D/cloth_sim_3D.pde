import toxi.physics3d.*;
import toxi.physics3d.behaviors.*;
import toxi.physics3d.constraints.*;
import toxi.physics2d.*;
import toxi.physics2d.behaviors.*;
import toxi.physics2d.constraints.*;
import toxi.geom.*;


ArrayList<Spring> springs;

float w = 10;
int rows = 40;
int cols = 40;


Particle[][] particles = new Particle[rows][cols];


VerletPhysics3D physics;


void setup() {
  size(600, 600, P3D);
  springs = new ArrayList<Spring>();

  physics = new VerletPhysics3D();
  Vec3D gravity = new Vec3D(0, 0.1, 0);
  GravityBehavior3D gb = new GravityBehavior3D(gravity);
  physics.addBehavior(gb);

  float x = -200;
  for(int i = 0; i < rows; i++){
    float z = -50;
    for(int j = 0; j< cols; j++){
      Particle p = new Particle(x,-100,z);
      particles[i][j] = p;
      physics.addParticle(p);
      z = z + w;
    }
    x = x + w;
  }

  for (int i = 0; i < cols - 1; i++){
    for(int j = 0; j < rows - 1; j ++){
      Particle a = particles[i][j];
      Particle b1 = particles[i+1][j];
      Particle b2 = particles[i][j+1];
      Particle b3 = particles[i+1][j+1];
      Spring s1 = new Spring(a, b1);
      Spring s2 = new Spring(a, b2);
      Spring s3 = new Spring(a, b3);
      springs.add(s1);
      springs.add(s2);
      springs.add(s3);
      physics.addSpring(s1);
      physics.addSpring(s2);
      physics.addSpring(s3);
    }
  }
  particles[0][0].lock();
  particles[0][cols-1].lock();
  particles[cols-2][rows-1].lock();
  particles[cols-1][0].lock();
}

float a = 0;
void draw() {
  background(50);
  translate(height/2,width/2);
  // rotateX(a);
  a += 0.01;
  physics.update();
  for(int i = 0; i < rows; i++){
    for(int j = 0; j < cols; j++){
      particles[i][j].display();
    }
  }
  for(Spring s : springs){
    s.display();
  }
}
