var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

//Variables for palyer construction.
var playerWidth = 100;
var playerHeight = 100;
var playerPositionX = (canvas.width - playerWidth);// X and Y given same initial location.
var playerPositionY = (canvas.width - playerWidth);
var playerVelocityX = 5;
var playerVelocityY = 5;

//Variables for keyboard inputs.
var rightPressed;
var leftPressed;
var upPressed;
var downPressed;

//Adds key board events ot handle player movements
function keyDownHandler(event)
{
    if(event.keyCode == 39)
    {
        rightPressed = true;
    }
    else if(event.keyCode == 37)
    {
        leftPressed = true;
    }
    else if(event.keyCode == 40)
    {
        //Down
        downPressed = true;
    }
    else if(event.keyCode == 38)
    {
        //Up
        upPressed = true;
    }
}

function keyUphandler(event)
{
    if(event.keyCode == 39)
    {
        rightPressed = false;
    }
    else if(event.keyCode == 37)
    {
        leftPressed = false;
    }
    else if(event.keyCode == 40)
    {
        //Down
        downPressed = false;
    }
    else if(event.keyCode == 38)
    {
        //Up
        upPressed = false;
    }
}

document.addEventListener('keydown',keyDownHandler,false);
document.addEventListener('keyup', keyUphandler,false);

function drawPlayer()// Draw function fraws the player.
{
    ctx.beginPath();
    ctx.rect(playerPositionX, playerPositionY ,playerWidth,playerHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() 
{
    ctx.clearRect(0,0,canvas.width, canvas.height);//Clears the canvas every refresh.
    

    if(rightPressed)
    {
        playerPositionX += playerVelocityX;
    }
    else if(leftPressed)
    {
        playerPositionX -= playerVelocityX;
    }
    else if(upPressed)
    {
        playerPositionY -= playerVelocityY;
    }
    else if(downPressed)
    {
        playerPositionY += playerVelocityY;
    }

    drawPlayer();

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);