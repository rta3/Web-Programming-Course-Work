export default class Dog
{
    constructor(gameWidth, gameHeight)
    {
        //var playerDog = document.getElementById("DogTest.png");

        this.width = 150; // Width of the rectangle
        this.height = 30; // Height of the recatngle

        this.speedMax = 20;
        this.speed = 0;

        //This sets the initial position - CAREFUL, box was drawing off the screen !
        this.position = 
        {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 300
        };
    }

    moveLeft()
    {
        this.position.x = 10;
    }
    moveRight()
    {
        this.position.x++;
    }
    moveUp()
    {
        this.position.y++;
    }
    moveDown()
    {
        this.position.y--;
    }

    draw(ctx)
    {
        //ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        
    }

    update()
    {

    }
}