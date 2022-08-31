const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine;
var world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20, box21;
var box22, box23, box24, box25, box26, box27, box28;
var ball;
var blower;
var obstacle1, obstacle2, obstacle3;

function setup() {

  createCanvas(windowWidth-50, windowHeight-50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height - 20, width, 40);
  box1 = new Box(width/2, height*0.8, 100, 100);
  box2 = new Box(width/2 + 100, height*0.8, 100, 100);
  box3 = new Box(width/2 + 200, height*0.8, 100, 100); 
  box4 = new Box(width/2 + 50, height*0.6, 100, 100);
  box5 = new Box(width/2 + 150, height*0.6, 100, 100);
  box6 = new Box(width/2 + 100, height*0.5, 100, 100);
  box7 = new Box(width/2 + 300, height*0.8, 100, 100);
  box8 = new Box(width/2 + 250, height*0.6, 100, 100);
  box9 = new Box(width/2 + 200, height*0.5, 100, 100);
  box10 = new Box(width/2 + 150, height*0.4, 100, 100);
  box11 = new Box(width/2 + 400, height*0.8, 100, 100);
  box12 = new Box(width/2 + 350, height*0.6, 100, 100);
  box13 = new Box(width/2 + 300, height*0.5, 100, 100);
  box14 = new Box(width/2 + 250, height*0.4, 100, 100);
  box15 = new Box(width/2 + 200, height*0.3, 100, 100);
  box16 = new Box(width/2 + 500, height*0.8, 100, 100);
  box17 = new Box(width/2 + 450, height*0.6, 100, 100);
  box18 = new Box(width/2 + 400, height*0.5, 100, 100);
  box19 = new Box(width/2 + 350, height*0.4, 100, 100);
  box20 = new Box(width/2 + 300, height*0.3, 100, 100);
  box21 = new Box(width/2 + 250, height*0.2, 100, 100);
  box22 = new Box(width/2 + 600, height*0.8, 100, 100);
  box23 = new Box(width/2 + 550, height*0.6, 100, 100);
  box24 = new Box(width/2 + 500, height*0.5, 100, 100);
  box25 = new Box(width/2 + 450, height*0.4, 100, 100);
  box26 = new Box(width/2 + 400, height*0.3, 100, 100);
  box27 = new Box(width/2 + 350, height*0.2, 100, 100);
  box28 = new Box(width/2 + 300, height*0.1, 100, 100);
  ball = new Ball(width*0.2, height/2, 75);

  blower = createImg("assets/blower.gif");
  blower.position(width*0.05, height-300);
  blower.size(150, 300);
  blower.mouseClicked(blow);

  obstacle1 = new Ground(500, 500, 20, 275)
  obstacle2 = new Ground(250, 125, 20, 275)
  obstacle3 = new Ground(750, 125, 20, 275)

}

function draw() {

  background("yellow");

  ground.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  ball.display();

  obstacle1.display();
  obstacle2.display();
  obstacle3.display();

  /*if(keyCode===32){
    ball.body.position.x = width/4
    ball.body.position.y = height*0.75
  }*/
 

  Engine.update(engine);
}

function blow(){
  Matter.Body.applyForce(ball.body, {
    x: 0,
    y: 0
  }, {
    x: 200,
    y: 1
  });
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, {
      x: 0,
      y: 0
    }, {
      x: 10,
      y: 750
    });
  }
}