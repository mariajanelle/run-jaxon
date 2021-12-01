var Runner, boy;
var path, bomb , coin , energyDrink, power, pathImage ;

function preload(){
  //pre-load images
  bombImage = loadImage("bomb.png");
  coinImage = loadImage("coin.png");
  energyDrinkImage = loadImage("energyDrink.png");
  pathImage = loadImage("path.png");
  powerImage = loadImage("power.png");
  Runner = loadAnimation ("Runner-1.png", "Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200); 
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale= 1.2;
  
  boy = createSprite(200, 200,50,30)
  boy.addAnimation("running", Runner)
  boy.scale = 0.1
  leftboundary= createSprite(0,0,100,180)
  leftboundary.visible = false
  rightboundary = createSprite(410,0,100,180)
  rightboundary.visible = false
} 

function draw() {
  background(100);
if(path.y > 400){
  path.y = height/2;

  
}
edges = createEdgeSprites()
boy.collide(edges[3])
boy.collide(leftboundary)
boy.collide(rightboundary)
boy.x = World.mouseX
drawSprites ()
}
