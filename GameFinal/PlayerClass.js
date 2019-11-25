// Canvas components
var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

// Player related vaiables
var player;
var playerPositionX = (300);// X and Y given same initial location.
var playerPositionY = (300);
var playerVelocityX = 5;
var playerVelocityY = 5;
var playerAngle;

// Movement related vaiables
var rightPressed;
var leftPressed;
var upPressed;
var downPressed;

export default class PlayerDrawer
{
    constructor(width, height, color, imagePosX, imagePosY, type) 
    {

        // These parameters set the values for player sprite construction
        this.type = type;
        if(type == "image") 
        {
          this.image = new Image();
          this.image.src = color;
        }

        this.width = width;
        this.height = height;
        this.imagePosX = playerPositionX;
        this.imagePosY = playerPositionY;
        this.angle = playerAngle;
        ctx.save();
        ctx.translate(this.playerPositionX, this.playerPositionY);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.imagePosX, this.imagePosY, this.width, this.height);
        ctx.restore();

        // These functions handle the players movements 
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

        // In tandem with the above code segments, updates the players movements.
        function draw() 
        {   
            if(rightPressed)
            {
                playerPositionX += playerVelocityX;
                //player.angle += 1 * Math.PI/2;// changes the playerAngle value
        
            }
            else if(leftPressed)
            {
                playerPositionX  -= playerVelocityX;
                //player.angle += 3 * Math.PI/2;
       
            }
            else if(upPressed)
            {
                playerPositionY -= playerVelocityY;
       
            }
            else if(downPressed)
            {
                playerPositionY += playerVelocityY;
            
            }
    
            if(rightPressed && upPressed)
            {
                playerPositionX += playerVelocityX/3;
                playerPositionY -= playerVelocityY/3;
            }
            else if(rightPressed && downPressed)
            {
                playerPositionX += playerVelocityX/3;
                playerPositionY += playerVelocityY/3;
            }
            else if(leftPressed && upPressed)
            {
                playerPositionX -= playerVelocityX/3;
                playerPositionY -= playerVelocityY/3;
            }
            else if(leftPressed && downPressed)
            {
                playerPositionX -= playerVelocityX/3;
                playerPositionY += playerVelocityY/3;
            }
           
        }
            requestAnimationFrame(draw);
    }
    
}