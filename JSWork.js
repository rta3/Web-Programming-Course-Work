//Variables stored at the top.
var playerOneSprite;

// Not in scope.
var gameArea = 
{
	canvas : document.createElement("canvas"), start: function()
	{
		// This create a canvas for game to be drawn on width x height.
		this.canvas.width = 500;	// Dummy Value
		this.canvas.height = 500;	// Dummy Value
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas,
										document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 10);// This calls the update function, refreshing the game at set interval.
	}
}

clear : function()
{
	// Used to reset the canvas after the game.
	this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
}

window.addEventListener('kbDown', function(e))// Creates an event listener that will allow keyboard invo
{
	gameArea.key = e.keyCode;
}
window.addEventListener('kbUp', function(e)) // This is needed to allow proper functionality of keyboard inputs
{
	gameArea.key = false;
}

function initGame() // Initializes the game.
{
	gameArea.start();
	playerOneSprite = new componentPlayer(50,50,"blue",10, 100)// Dummy value. This creates a component that will enable player fucntionality.
}

function componentPlayer(width, height, color, x, y) //This function will define the parameters of the players sprite.
{
	this.width = width; // Dimensions of the sprite
	this.height= height;
	
	this.x = x; // x and y positions of the sprite
	this.y = y;
	
	this.velocityX = 0; // velocity/ speed of the sprite
	this.velocityY = 0;
	
	this.playerPositionX = this.x += this.velocityX // This should update the position of the sprite
	this.playerPositionY = this.y += this.velocityY;
	
	context = fillStyle = color;
	context.fillRect(this.x, this.y, this.width, this.height);
}

function gameUpdate() // This will handle the frame updates that occur in the game.
{
	gameArea.clear();
		
	componentPlayer.velocityX = 0; // These intialize the velocity to 0, at the start of the game
	componentPlayer.velocityY = 0;
	playerMovement(); // Calls palyer movement function, should work
	
	componentPlayer.update();//Player updates must come at end of their code as otherwise it will update before it make changes
	
}

//These functions will handle player movement
function playerMovement()
{
	if(gameArea.key && gameArea.key[37])// If left arrow is pressed
	{
		componentPlayer.velocityX -= 1; // Decrements the x value 
	}
	if(gameArea.key && gameArea.key[38])// If right arrow is pressed
	{
		componentPlayer.velocityX += 1; // Increments the x value 
	}
	if(gameArea.key && gameArea.key[39])// If down arrow is pressed
	{
		componentPlayer.velocityY -= 1; // Decrements the y value 
	}
	if(gameArea.key && gameArea.key[40])// If up arrow is pressed
	{
		componentPlayer.velocityX += 1; // Increments the y value 
	}
}
