var rect,mrect;

function setup() {
  createCanvas(1200,800);
 rect=createSprite(350, 200, 50, 80);
 mrect=createSprite(400,200,80,30);
 rect.shapeColor="green";
 mrect.shapeColor="yellow";
}

function draw() {
  background(0,0,0); 
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  console.log(mrect.x-rect.x);
  if(mrect.x-rect.x<rect.width/2+mrect.width/2
    &&rect.x-mrect.x<rect.width/2+mrect.width/2
    &&mrect.y-rect.y<rect.width/2+mrect.width/2
    &&rect.y-mrect.y<rect.width/2+mrect.width/2){
    mrect.shapeColor="yellow";
    rect.shapeColor="green";

    }else{
      mrect.shapeColor="green";
      rect.shapeColor="yellow";
    }
  drawSprites();
          
}