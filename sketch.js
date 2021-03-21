var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = createGroup()
}
function setup() {
  createCanvas(1000, 600);
  player = createSprite(500,580);
  player.addImage(player_img);
  player.scale=0.4;
  
}

function draw() {
  background(back_img);
  if(keyDown("left")){
    player.x-=7
  }
  if(keyDown("right")){
    player.x+=7
  }
  if(fruitGroup.isTouching(player)){
    fruitGroup.destroyEach();
    score++
  }
  createFruit()
  drawSprites();
  text("score: "+score,950,15)

}
function createFruit(){
  if(frameCount%200===0){
    var fruit = createSprite(0,0)
    fruit.x = random(20,580);
    switch(Math.round(random(1,6))){
      case 1:
        fruit.addImage(fruit1_img);
        fruit.scale = 0.9
        break;
      case 2:
        fruit.addImage(fruit2_img);
        fruit.scale = 0.9
        break;
      case 3:
        fruit.addImage(fruit3_img);
        fruit.scale = 0.9
        break;
      case 4:
        fruit.addImage(fruit4_img);
        fruit.scale = 0.9
        break;
      case 5:
        fruit.addImage(fruit5_img);
        fruit.scale = 0.9
        break;
    }
    fruit.velocityY = 3
    fruit.lifetime = 300;
    fruitGroup.add(fruit);
  }
}