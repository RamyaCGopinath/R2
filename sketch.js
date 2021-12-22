var ball, obstacle1Group, obstacle2Group, coinGroup;
var score = 0; 
var gameState = "Welcome"; 
var level =0;
var backgroundScene0, backgroundScene1;
var scene1, scene2, scene3;
var ballImg,crownedBallImg;
var ballCollider;
function preload(){
  scene1 = loadImage("bg/bg1.png");
  scene2 = loadImage("bg/bg2.png");
  scene3 = loadImage("bg/bg3.png");
  ballImg = loadImage("assets/ball.png");
  crownedBallImg = loadImage("assets/crownedBall.png");
}

function setup(){
createCanvas(windowWidth, windowHeight);
scene1.resize(width,height);
  scene2.resize(width,height);
  scene3.resize(width,height);
  backgroundScene0 = createSprite(width/2, height/2, width, height);
  backgroundScene0.shapeColor = "pink";
  backgroundScene0.addImage("level1", scene1);
  backgroundScene0.addImage("level2", scene2);
  backgroundScene0.addImage("level3", scene3);
  backgroundScene0.velocityX = -7;

  
  backgroundScene1 = createSprite(width+width/2, height/2, width, height);
  backgroundScene1.shapeColor = "lightblue";
  backgroundScene1.addImage("level1", scene1);
  backgroundScene1.addImage("level2", scene2);
  backgroundScene1.addImage("level3", scene3);
  backgroundScene1.velocityX = -7;

  ball = createSprite(50, height/2);
  ball.addImage("ball", ballImg);
  ball.addImage("crownedBall", crownedBallImg);
  ball.scale = 0.5;
  ballCollider = createSprite(ball.x, height/2+200, 100,10);
  ballCollider.visible = false;

// keyLabel = createElement("h3", "Enter the key:");
// keyBox = createInput();
// startSubmit = createButton("Submit");
// startSubmit.position(width/2-100, height/2-130);
// keyLabel.position(width/2-100, height/2-150);
// keyBox.position(width/2-100, height/2-110);
}

function draw(){
  if(gameState == "Welcome"){
    background("white");

        if(backgroundScene0.x<=-width/2){
      backgroundScene0.x = backgroundScene1.x+width;
    }
    if(backgroundScene1.x<=-width/2){
      backgroundScene1.x = backgroundScene0.x+width;
    }

    if(keyDown("space") || touches.length>0){
      ball.velocityY = -10;
    }

    ball.velocityY+=0.5;
    ball.collide(ballCollider);

  }
  drawSprites();
  textSize(25);
  fill("white");
  text("Score = "+score, width-200, 50);
}