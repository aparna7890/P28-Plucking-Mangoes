
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, boy, ground, stone, band
var mango1, mango2, mango3, mango4, mango5

function preload()
{
	treeImg = loadImage("images/tree.png")
	boyImg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	imageMode(CENTER)

	boy = createSprite(180, 435)
	boy.addImage(boyImg)
	boy.scale=0.1
	
	fill("brown")
	ground = new Ground(600, 500, 1200, 20)

	stone = new Stone(130, 370, 70)

	mango1 = new Mango(840, 210, 50)
	mango2 = new Mango(797, 250, 50)
	mango3 = new Mango(770, 200, 50)
	mango4 = new Mango(900, 250, 50)
	mango5 = new Mango(730, 260, 50)

	bands = new Launcher(stone.body, {x: 130, y: 370})

	Engine.run(engine);
  
}

function draw() {

  background("white")
  drawSprites();

  image(treeImg, 800, 310, 400, 400)

  bands.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	bands.fly();
}

function detectCollision(lstone, lmango){
	mangoPosition = lmango.body.position
	stonePosition = lstone.body.position

	var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)

	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 130, y: 370})
		bands.attach(stone.body)
	}
}