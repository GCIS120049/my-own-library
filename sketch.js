var fixedRect, movingRect;
var a,b,c;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "white";
  //movingRect.debug = true;
  a = createSprite(200,50,50,50);
  a.shapeColor=color("blue");
  a.velocityY=0.3;
  b=createSprite(500,50,50,50);
  b.shapeColor=color("pink");
  b.velocityX=2;
  c=createSprite(800,50,50,50);
  c.shapeColor=color("purple");
  c.velocityX=-2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,a)){
   movingRect.shapeColor="purple";
   a.shapeColor="purple";
 }else{
  movingRect.shapeColor = "green";
  a.shapeColor = "green";
 }

 if(isTouching(movingRect,b)){
   movingRect.shapeColor="blue";
   b.shapeColor="blue";
 }
 isTouching(movingRect,c);
 bounceOff(b,c);
 bounceOff(movingRect,b);
 bounceOff(movingRect,c);
 bounceOff(movingRect,a);

  drawSprites();
}
