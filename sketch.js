
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rectangle;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	a = loadImage("a.jpg");
	
}

function setup() {
	createCanvas(1100, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rectangle = new wall(400,200,400,50);

	bob1 = new bob(520,507,30);
	bob2 = new bob(460,512,30);
	bob3 = new bob(399,510,30);
	bob4 = new bob(340,512,30);
	bob5 = new bob(280,507,30);
	
	rope1 = new rope(bob1.body,rectangle.body,120,-200);
	rope2 = new rope(bob2.body,rectangle.body,60,-200);
	rope3 = new rope(bob3.body,rectangle.body,0,-200);
	rope4 = new rope(bob4.body,rectangle.body,-60,-200);
	rope5 = new rope(bob5.body,rectangle.body,-120,-200);
  
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  console.log(bob5.body.position);

image(a,0,0,1200,1000);

fill("DarkOrange");
rect(400,350,600,500);

fill("GoldenRod");
rectMode(CENTER);
rect(900,350,300,500);

fill(0);
textSize(80);

text("press",800,200);

textSize(50);
text("to start",799,470);

fill("red");
textSize(80);
text("Space",810,350);

  
  drawSprites();

  fill("crimson");
  
 rectangle.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}

function keyPressed(){
	
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: 0.07,y: -0});
	}
}

