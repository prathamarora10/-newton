
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5
var point1,point2,point3,point4,point5

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ball1 = new Ball(300,600,50)
	ball2 = new Ball(400,600,50)
	ball3 = new Ball(500,600,50)
	ball4 = new Ball(600,600,50)
	ball5 = new Ball(700,600,50)
	point1 = new Point(ball1.body,{x:300,y:100})
	point2 = new Point(ball2.body,{x:400,y:100})
	point3 = new Point(ball3.body,{x:500,y:100})
	point4 = new Point(ball4.body,{x:600,y:100})
	point5 = new Point(ball5.body,{x:700,y:100})

	Engine.run(engine);
  
}


function draw() {
  background('gray')

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	point1.display();
	point2.display();
	point3.display();
	point4.display();
	point5.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
