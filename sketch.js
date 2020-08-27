
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, box1, side1, side2, side3, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 200)

	box1 = new Box(0, 0, 0, 0);
	side1 = new Side(735, 610, 20,150);
	side2 = new Side(565, 610, 20,150);

	ground = new Ground(400, 690, 800, 20);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); 
	Engine.run(engine); Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  side1.display();

  paper.display();

  ground.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.postion,{x:85, y:-95});
	}
}



