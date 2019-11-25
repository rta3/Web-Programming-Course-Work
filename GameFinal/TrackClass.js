var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d")

var trackOne = new Image();
trackOne.src = "Track1.png";

var imagePosX = 0;
var imagePosY = 0;

export default class TrackDrawer
{
    constructor(width, height, color, posX, posY, type)
    {
        this.type = type;
        if(type == "image") 
        {
          this.image = new Image();
          this.image.src = color;
        }

        this.width = width;
        this.height = height;
        this.posX = 0;
        this.posY = 0;

        ctx.drawImage(this.image, this.width, 
                        this.height, this.posX, this.posY);
        
    }
}