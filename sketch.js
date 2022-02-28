var Runner,player

var road,path




function preload(){
  //pre-load images
  Runner = loadAnimation("Runner-1.png","Runner-2.png");
  road = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path  = createSprite(200,200);
  path.addImage("path.png",road);
  path.scale = 1.2;

  player = createSprite(200,340,80,80);
  player.addAnimation("Running",Runner);
  player.scale = 0.04;

}

function draw() {
  background(50)
  drawSprites();
  
  //Making the path infinite.
  
  
  if (path.y > 200){
    path.y = path.height / 2;
  }
}

