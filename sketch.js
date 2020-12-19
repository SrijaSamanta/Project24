
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperObject;
var wall1,wall2,wall3;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20);

	paperObject = new Paper(200,450,15);

	wall1 = new Dustbin(1100,630,200,20);
	wall2 = new Dustbin(1200,590,20,100);
	wall3 = new Dustbin(1000,590,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);
  
  keyPressed(paperObject);
  ground.display();
  paperObject.display();
  wall1.display();
  wall2.display();
  wall3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-30});
		
	}

}



