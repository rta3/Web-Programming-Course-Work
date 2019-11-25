import PlayerDrawer from './PlayerClass';
import TrackDrawer from './TrackClass';
import CheckPoints from './CheckpointMaker';

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

//Level Components
var track = new Image();
track.src = "Track1.png";
var firstTrack;

var checkPnt = new CheckPoints();

//Variables for player construction.
var player;
var playerWidth = 67;
var playerHeight = 23;
var player1PositionX;// X and Y given same initial location.
var player1PositionY;
var playerVelocityX = 5;
var playerVelocityY = 5;
var playerRotation = 0;
var playerAngle = 0;

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
        downPressed = true;
    }
    else if(event.keyCode == 38)
    {
        upPressed = true;
    }
}

function keyUphandler(event)
{
    if(event.keyCode == 39)//39 is Right
    {
        rightPressed = false;
    }
    else if(event.keyCode == 37)//37 is Left
    {
        leftPressed = false;
    }
    else if(event.keyCode == 40)//40 is Down
    {
        //Down
        downPressed = false;
    }
    else if(event.keyCode == 38)//38 is Up
    {
        //Up
        upPressed = false;
    }
}

document.addEventListener('keydown', keyDownHandler,false);
document.addEventListener('keyup', keyUphandler, false);

function drawCheckPoints()
{
    ctx.beginPath();
    ctx.rect(100, 100 ,80, 80);
    ctx.fillStyle = "lime";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(500, 100 ,80, 80);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(80, 550 ,80, 80);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    

    ctx.beginPath();
    ctx.rect(550, 550 ,80, 80);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  
}


function draw() 
{
    ctx.clearRect(0,0,canvas.width, canvas.height);// Clears the canvas every refresh.
    ctx.drawImage(track, 0,0, 700,700);
    //firstTrack = new TrackDrawer(700,700,"Track1.png", 0, 0, "image");
    drawCheckPoints();
    player = new PlayerDrawer(150,45,"CowSprite.png", player1PositionX, player1PositionY, "image");
        
      
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);