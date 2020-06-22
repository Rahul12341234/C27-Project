const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, ball1, ball2, ball3, ball4;
var chain, chain1, chain2, chain3, chain4;
var roof;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	roof = new Roof(600, 100, 450, 10);
	
	ball = new Ball(400, 400, 100);
	ball1 = new Ball(500, 400, 100);
	ball2 = new Ball(600, 400, 100);
	ball3 = new Ball(700, 400, 100);
	ball4 = new Ball(800, 400, 100);

	chain = new Line(ball.body, {x: 400, y: 100});
	chain1 = new Line(ball1.body, {x: 500, y: 100});
	chain2 = new Line(ball2.body, {x: 600, y: 100});
	chain3 = new Line(ball3.body, {x: 700, y: 100});
	chain4 = new Line(ball4.body, {x: 800, y: 100});
	
	Engine.run(engine);
}

function draw() {
  background(255);
  Engine.update(engine);
  roof.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
}

function keyPressed(){
  if (keyCode === 32){
	  Matter.Body.setVelocity(ball.body, -10);
  }
}