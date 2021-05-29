var path, path_img

var boy,boy_img

function preload(){
  //pre-load images
  
  path_img=loadImage("path.png");
  
  boy_img=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("running area",path_img);
  path.scale=1.2
  path.velocityY=4
  
  boy=createSprite(180,350,30,30);
  boy.addAnimation("runner",boy_img);
}

function draw() {
  background("black");
drawSprites();
  if(path.y>400)
    {
      path.y=height/2;
    }
  
  boy.x=World.mouseX;
}
