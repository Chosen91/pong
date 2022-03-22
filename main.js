const GAME_AREA_WIDTH = 700;

const GAME_AREA_HEIGHT = 500;

const PADDLE_HEIGHT = 100;

const PADDLE_WIDTH = 20;

const BALL_SIZE = 20;




const computerPaddle = document.querySelector(".computer-paddle");

const playerPaddle = document.querySelector(".player-paddle");

const ball = document.querySelector(".ball");

//Velocity - how the ball moves over time

let computerPaddleYPosition = 0;

let computerPaddleYVelocity = 5;

//Createds movement of the paddles. P.S. never go over 15 for velocity because it is too fast!

let playerPaddleYPosition = 100;

let playerPaddleYVelocity = 5;


// Above the update() funciton, create variables to store the ball's x-position, y-position, x-velocity, and y-velocity
let ballYPosition = 250;
let ballXPosition = 350;

let ballYVelocity = 5;
let ballXVelocity = 5;




function update() {

  computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

  playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;


//Call Computer paddle position
  computerPaddle.style.top = `${computerPaddleYPosition}px`;

  if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 400) {

    computerPaddleYVelocity = computerPaddleYVelocity * -1;

  }



//Call Player Paddle position
  playerPaddle.style.top = `${playerPaddleYPosition}px`;

  if (playerPaddleYPosition <= 0 || playerPaddleYPosition >= 400) {

    playerPaddleYVelocity = playerPaddleYVelocity * -1;

  }



//This keeps the ball in Motion.
  ballYPosition = ballYPosition + ballYVelocity;

  ballXPosition = ballXPosition + ballXVelocity;

  ball.style.left = ballXPosition + "px";

  ball.style.top = ballYPosition + "px";




  if (ballXPosition > 680) {

    ballXVelocity = ballXVelocity * -1;

  }

  if (ballXPosition < 1) {

    ballXVelocity = ballXVelocity * -1;

  }

  if (ballYPosition > 480) {

    ballYVelocity = ballYVelocity * -1;

  }

  if (ballYPosition < 1) {

    ballYVelocity = ballYVelocity * -1;

  }

}


setInterval(update, 35);
