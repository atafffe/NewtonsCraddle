
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,100,300,40);

  	bob1 = new Bob(300,350,50);
  	bob2 = new Bob(350,350,50);
  	bob3 = new Bob(400,350,50);
  	bob4 = new Bob(450,350,50);
  	bob5 = new Bob(500,350,50);

  	sling1 = new Rope(bob1.body,ground.body,-50*2,0);
  	sling2 = new Rope(bob2.body,ground.body,-25*2,0);
  	sling3 = new Rope(bob3.body,ground.body,-0*2,0);
  	sling4 = new Rope(bob4.body,ground.body,25*2,0);
  	sling5 = new Rope(bob5.body,ground.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	ground.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();

  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{Matter.Body.applyForce(bob5.body,bob5.body.position,{x:+100,y:+100});};
} 

