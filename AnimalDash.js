var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

//Variables for player construction.
var player;
var playerWidth = 67;
var playerHeight = 23;
var playerPositionX = (canvas.width - playerWidth);// X and Y given same initial location.
var playerPositionY = (canvas.width - playerWidth);
var playerVelocityX = 5;
var playerVelocityY = 5;
var playerRotation = 0;

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

document.addEventListener('keydown',keyDownHandler,false);
document.addEventListener('keyup', keyUphandler,false);

class SpriteConstuctor 
{
    constructor(width, height, color, imagePosX, imagePosY, type, imageRotation) 
    {
        this.type = type;
        if (type == "image") 
        {
            this.image = new Image();
            this.image.src = color;
        }
        this.width = width;
        this.height = height;
        this.imagePosX = playerPositionX;
        this.imagePosY = playerPositionY;
        ctx.translate(this.playerPositionX, this.playerPositionY);
        this.angle = playerRotation;
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.imagePosX, this.imagePosY, this.width, this.height);


    }
}


//draw player function, could be useful for testing.

function drawPlayer()
{
    
    ctx.beginPath();
    ctx.rect(playerPositionX, playerPositionY ,playerWidth, playerHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  
}

function draw() 
{
    ctx.clearRect(0,0,canvas.width, canvas.height);//Clears the canvas every refresh.
    player = new SpriteConstuctor(67,20,"DogSprite.png", playerPositionY, playerVelocityY, "image", playerRotation);
    if(rightPressed)
    {
        playerPositionX += playerVelocityX;
        player.angle += Math.PI/2;//90
    }
    else if(leftPressed)
    {
        playerPositionX -= playerVelocityX;
        playerRotation.angle += Math.PI;//270
        
    }
    else if(upPressed)
    {
        playerPositionY -= playerVelocityY;
        playerRotation.angle += 0;
    }
    else if(downPressed)
    {
        playerPositionY += playerVelocityY;
        playerRotation.angle += (Math.PI)*(1.5);//180
    }
        
    //drawPlayer();
    player = new SpriteConstuctor(67,20,"DogSprite.png", playerPositionY, playerVelocityY, "image", playerRotation);
   
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);