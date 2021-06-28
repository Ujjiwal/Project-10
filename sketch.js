var shipImg,ship,seaImage,sea;

function preload(){
  seaImg=loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  }
  
  function setup(){

background("blue")
  
 createCanvas(400,400);
 
 sea=createSprite(400,200);
 sea.addImage("sea",seaImg);
sea.velocityX=-2;
  sea.scale=0.3

  ship = createSprite(150,200,20,20)
  ship.addAnimation("movingShip",shipImg1)
  ship.scale=0.25
 
 }



  function draw(){ 
background(0);

if(sea.x <0) {
  sea.x = sea.width/8;
}

drawSprites()  

  }