var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

var playerWidth = 100;
var playerHeight = 100;
var playerXPosition = (canvas.width - playerWidth)/2;
var playerVelocityX = 5;
var playerVelocityY = 5;

var rightPressed;
var leftpressed;
var upPressed;
var downPressed;

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
}

document.addEventListener('keydown',keyDownHandler,false);
document.addEventListener('keyup', keyUphandler,false);
function drawPlayer()
{
    ctx.beginPath();
    ctx.rect(playerXPosition, canvas.height - playerHeight,playerWidth,playerHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() 
{
    ctx.clearRect(0,0,canvas.width, canvas.height);//Clears the canvas every refresh.
    drawPlayer();

    if(rightPressed)
    {
        playerXPosition += playerVelocityX;
    }
    else if (leftPressed)
    {
        playerVelocityX -= playerVelocityX;
    }


    requestAnimationFrame(Draw);
}

requestAnimationFrame(draw);