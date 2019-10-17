import Dog from "./ClassTest";
import pInputs from "./PlayerInputs";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//Creates constants for the game dimensions
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

//Creates a test rectangle to draw.
ctx.clearRect(0,0,800,600);

//Creates a new instance of paddle and draws it
let gameDog = new Dog(GAME_WIDTH, GAME_HEIGHT);
//Draws recrtangle
gameDog.draw(ctx);

new pInputs(gameDog);


