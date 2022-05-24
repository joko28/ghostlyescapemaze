//** HTML FILE ~~
// title of the game
// button for artist statement - probably a diff. html file
// has info on how to play the game at bottom of screen
//** TITLE SCREEN ~~
// button press to start game
//** PLAY GAME SCREEN -~
// timer when the game starts
// maze layout - collision codes so player can't pass through walls
// ghost that follows player through the maze (if caught - game over)
// collect coins for speed??
//** GAME OVER SCREEN ~~
// key press/button to restart
// final time
// win/lose screens??

//defined for player movement
let x = 100;
let y = 100;

//wall collisions
var walls;
let wall = [];
var walls2;
let wall2 = [];
var walls3;
let wall3 = [];

//player
var player1;
var players;

//screens
let canvas;
let gameState = "title";
let level = 1;

//timer
let startTime;
let timeFrame;
let timeInt = 1800;

//**PRELOAD FONTS/IMAGES
function preload() {
  myFont = loadFont('assets/fonts/Monoton-Regular.ttf');
  ghost = loadImage('assets/ghost.png');
}

function setup() {
  //**CREATES CANVAS
  canvas = createCanvas(600, 550);
  canvas.parent("sketch-holder");
  textFont(myFont);
  frameRate(60);

  gameLevel1();
  gameLevel2();
  gameLevel3();

  imageMode(CENTER);
  var pimg = loadImage('assets/player.png');
  player1 = createSprite(x, y);
  player1.addImage(pimg);
  players = new Group();
  players.add(player1);

}

function draw() {
  //**SWITCH BTWN SCREENS 'DEFINED'
  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "info":
      infoScreen();
      break;
    case "game":
      gameScreen();
      playerMovement();
      break;
    case "gamewin":
      gameWin();
      break;
    case "gameover":
      gameOver();
      break;
  }
}

//**KEY PRESSED FUNCTIONS
function keyPressed() {
  if (keyCode === ENTER) {
    if (gameState === "title") {
      gameState = "info";
    } else if (gameState === "info" || gameState === "gameover") {
      //insert timer start here
      timeStart();
      gameState = "game";
    } else if (gameState === "gamewin") {
      gameState = "game";
      player1.position.x = 100;
      player1.position.y = 100;
      if (level == 1) {
        level = 2;
      } else if (level == 2) {
        level = 3;
      }
    }
    if (gameState === "game") {
      if (key === "s" || key === "S") {
        saveCanvas();
      } else if (gameState === "game") {
        if (key === "x" || key === "X") {
          gameState = "gameover";
        }
      }
    }
  }
}

//**FUNCTION FOR TIMER DURING GAMESCREEN
function timeStart() {
  startTime = frameCount;
  timeFrame = startTime + timeInt;
}

//**FUNCTION FOR RENDERING THE TITLE SCREEN
function titleScreen() {
  background(25, 0, 51);
  stroke(229, 204, 255);
  fill(229, 204, 255);
  textAlign(CENTER);
  noStroke();
  textSize(20);
  text('Press "Enter" To Start Game', width * 0.5, height * 0.5);
}

//**FUNCTION FOR INFO SCREEN
function infoScreen() {
  background(25, 0, 51);
  stroke(229, 204, 255);
  fill(229, 204, 255);
  textSize(30);
  textAlign(CENTER);
  text("INFO ON HOW TO PLAY THE GAME", width * 0.5, height * 0.1);
  textSize(20);
  textAlign(LEFT);
  text('Press "Enter" To Start Game', width * 0.1, height * 0.46);
  text('Press "S" to save the game', width * 0.1, height * 0.56);
  text('Press "X" to end game', width * 0.1, height * 0.66);
  text('Press "Enter" to play again', width * 0.1, height * 0.76);
}

//**FUNCTION FOR RENDERING THE MAIN GAME PLAY SCREEN
function gameScreen() {
  //text
  background(25, 0, 51);
  stroke(229, 204, 255);
  fill(229, 204, 255);
  textAlign(CENTER);
  textSize(20);
  text("Escape the ghost!", width * 0.5, height * 0.05);

  //ghost
  image(ghost, 45, 100);
  //still needs movement to be an actual game!!

  //player movement collision debug
  playerMovement();
  player1.debug = mouseIsPressed;
  if (level == 1) {
    player1.collide(walls);
    drawSprites(walls);
  } else if (level == 2) {
    player1.collide(walls2);
    drawSprites(walls2);
  } else if (level == 3) {
    player1.collide(walls3);
    drawSprites(walls3);
  }

  drawSprites(players);

  //win screen for exit
  if (player1.position.x > 580) {
    if (player1.position.y > 430) {
      gameState = "gamewin";
      console.log("you win");
    }
  }

  //exit
  fill(255, 0, 0);
  rect(580, 430, 30, 50);

  //start timer
  if (frameCount > timeFrame) {
    gameState = "gameover";
  }

  //timer text
  fill(255);
  let currentTime = int((timeFrame - frameCount) / 60);
  textAlign(LEFT);
  text("Time: " + currentTime, 10, 540);
}

//**PLAYER MOVEMENT
function playerMovement() {
  player1.velocity.x = 0;
  player1.velocity.y = 0;

  if (keyIsDown(LEFT_ARROW)) {
    player1.velocity.x = -3;
    //x -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player1.velocity.x = +3;
    //x += 4;
  }

  if (keyIsDown(UP_ARROW)) {
    player1.velocity.y = -3;
    //y -= 4;
  }

  if (keyIsDown(DOWN_ARROW)) {
    player1.velocity.y = +3;
    //y += 4;
  }
}

//**FUNCTION FOR RENDERING WIN SCREEN
function gameWin() {
  background(0, 153, 76);
  stroke(204, 255, 229);
  fill(204, 255, 229);
  textAlign(CENTER);
  textSize(60);
  text("YOU WIN!", width * 0.5, height * 0.33);
  noStroke();
  textSize(20);
  text('Press "Enter" To Play Again', width * 0.5, height * 0.66);
}

//**FUNCTION FOR RENDERING GAME OVER SCREEN
function gameOver() {
  //background(255, 204, 204);
  background(102, 0, 0);
  stroke(255, 204, 204);
  fill(255, 204, 204);
  textAlign(CENTER);
  textSize(60);
  text("GAME OVER", width * 0.5, height * 0.33);
  noStroke();
  textSize(20);
  text('Press "Enter" To Play Again', width * 0.5, height * 0.66);
}
