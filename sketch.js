
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ball1
var ball2
var ball3
var ball4
var ball5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(400,100,400,100)
ball1=new Bob(400,550,35)
ball2=new Bob(450,550,35)
ball3=new Bob(500,550,35)
ball4=new Bob(350,550,35)
ball5=new Bob(300,550,35)
chain1=new Chain(ball1.body,ground.body)
chain2=new Chain(ball2.body,ground.body)
chain3=new Chain(ball3.body,ground.body)
chain4=new Chain(ball4.body,ground.body)
chain5=new Chain(ball5.body,ground.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ground.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
  
  drawSprites();
 
}



