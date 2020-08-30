
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var diameter;

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(680, 100, 600, 15)
	 diameter = 50
	 
	 bob = new Bob(480, 402, 23);
	 chain1 = new Chain(bob.body, roof.body, -diameter*2, 0)
	 bob2 = new Bob(680, 412, 23);
	 chain2 = new Chain(bob2.body, roof.body, -diameter*1, 0)
	 bob3 = new Bob(765, 403, 23);
	 chain3 = new Chain(bob3.body, roof.body, -diameter*0, 0)
	 bob4 = new Bob(870, 380, 23);
	 chain4 = new Chain(bob4.body, roof.body, -diameter*-1, 0)
	 bob5 = new Bob(880, 398, 23);
	 chain5 = new Chain(bob5.body, roof.body, -diameter*-2, 0)
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  roof.display();
  bob.display();
  chain1.display();
  bob2.display();
  chain2.display();
  bob3.display();
  chain3.display();
  bob4.display();
  chain4.display();
  bob5.display();
  chain5.display();
  

  text(mouseX+","+mouseY,mouseX,mouseY);
 
}
function mouseDragged(){
	Body.setPosition(bob5.body, {x:mouseX, y:mouseY})
	}
	
	function mouseReleased(){
	chain1.fly()
	}
