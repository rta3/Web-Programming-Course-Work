var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

export default class CheckPoints
{
    constructor()
    {
        
        function drawPlayer()
        {
            
            ctx.beginPath();
            ctx.rect(100, 100 ,80, 80);
            ctx.fillStyle = "green";
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
    }
}