import config from "./config";
import { drawT, drawO, drawS } from "./draw/shapes";
import Game from "./Game";
import Shape from "./Shape";

const { tileSize } = config;
const currentGame = new Game(10, 20);
const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");

canvas.width = 10 * tileSize;
canvas.height = 20 * tileSize;

const cx = canvas.getContext("2d");
let pos = 0;
let gameOver = true;

const shape = new Shape();

console.log(currentGame.tileBoard);
console.log(shape.spawnOnBoard(currentGame.tileBoard));

const drawFrame = () => {
  // clear previous frame
  cx.clearRect(0, 0, canvas.width, canvas.height);

  // background
  cx.fillStyle = "#cccccc";
  cx.fillRect(0, 0, canvas.width, canvas.height);

  // move
  pos = pos >= canvas.height ? canvas.height : pos + tileSize;
  drawS(cx, 4 * tileSize, pos, 0);

  // repeat
  if (!gameOver) {
    window.requestAnimationFrame(drawFrame);
  }
};
window.requestAnimationFrame(drawFrame);
