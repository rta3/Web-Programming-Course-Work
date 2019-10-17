export default class pInputs
{
    constructor(gameDog)
    {
        document.addEventListener("keydown", event => 
        {
            switch (event.keyCode)
            {
                //37 equals left
                case 37:
                    gameDog.moveLeft()
                    //alert("left");
                    break;
                //38 equals up
                case 38:
                    gameDog.moveRight()
                    //alert("right");
                    break;
                //39 equals right
                case 39:
                    gameDog.moveUp()
                    //alert("up");
                    break;
                //40 equals down
                case 40:
                    gameDog.moveDown()
                    //alert("down");
                    break;


            }
        })
    };
}