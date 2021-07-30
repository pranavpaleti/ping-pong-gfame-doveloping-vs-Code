var ball,ballImage;
var playerPaddle,playerPaddleImage,player_kickImage;
var computerPaddle,computerPaddleImage;
var top1,bottom1;
var edges

function preload(){
ballImage=loadImage("ball.png");
playerPaddleImage=loadImage("player.png");
player_kickImage=loadImage("player kick.png");
computerPaddleImage=loadImage("robot.png");
player_kickImage=loadImage("player kick.png");
}
function setup(){
createCanvas(windowWidth-100,windowHeight-40)

ball=createSprite(windowWidth/2,windowHeight/2,10,10);
ball.addImage(ballImage);


playerPaddle=createSprite(windowWidth-140,windowHeight/2+10,10,100);
playerPaddle.addImage(playerPaddleImage);



computerPaddle=createSprite(windowWidth/2+-580,windowHeight/2+10,10,100);
computerPaddle.addImage(computerPaddleImage);
edges=createEdgeSprites();
//top1=createSprite(10,10,10000,10);
//top1.setColor("white")
//bottom=createSprite(200,545,2500,10);

}
function draw(){
    background("black");
    
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);//bottom
    ball.bounceOff(playerPaddle);
    ball.bounceOff(computerPaddle);
    if(ball.isTouching(playerPaddle)) {
      console.log("touching")
      playerPaddle.addImage(player_kickImage);
       }
       /*
       if(computerPaddle.isTouching(ball)){
     playSound("bat_hit_ball-(1).mp3");
       }*/

     
       /*
       if(ball.isTouching(topEdge)||ball.isTouching(bottomEdge)){
         playSound("wall_hit.mp3")
       }
       
       if (gameState === "serve") {
         text("Press Space to Serve",150,180);
       }
        
       text(compScore, 170,20);
       text(playerScore, 230,20);
       */
       
       playerPaddle.y = World.mouseY;
       
      
       computerPaddle.y = ball.y;
       
       
       for (var i = 0; i < windowHeight/3+450; i=i+20) {
         line(622,i,622,i+10);
       }
        
       
       
      
       
       
        if(keyDown("space") ) {
            serve();
        }
        
       
       
       
     /* if(ball.isTouching(box1)){
          playerPaddle.setAnimation("player")
        }
       
       if(ball.x > 400 || ball.x <0) {
         playSound("score.mp3")
         if(ball.x > 400) {
           compScore = compScore + 1;
           playerPaddle.setAnimation("player_fall")
         }
         
         if(ball.x < 0) {
           playerScore = playerScore + 1;
         }
         
         reset();
         gameState = "serve";
       }
       
       if (playerScore === 5 || compScore === 5){
         gameState = "over";
         text("Game Over!",170,160);
         text("Press 'R' to Restart",150,180);
       }
       
       if (keyDown("r") && gameState === "over") {
         gameState = "serve";
         compScore = 0;
         playerScore = 0;
       }
       */
      
       drawSprites();
     }
     
     function serve() {
       ball.velocityX = 3;
       ball.velocityY = 4;
     }
     
     /*function reset() {
       ball.x = 200;
       ball.y = 200;
       ball.velocityX = 0;
       ball.velocityY = 0;
     }
     */
     