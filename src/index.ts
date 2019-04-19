import config from "./config";
import { drawT, drawO, drawS } from "./draw/shapes";

const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
const { tileSize } = config;
canvas.width = 10 * tileSize;
canvas.height = 20 * tileSize;

const cx = canvas.getContext("2d");
let pos = 0;
let gameOver = true;

const tileBoard = new Array(20).fill(new Array(10).fill(0));

const drawFrame = () => {
  // clear previous frame
  cx.clearRect(0, 0, canvas.width, canvas.height);

  // background
  cx.fillStyle = "#cccccc";
  cx.fillRect(0, 0, canvas.width, canvas.height);

  // move
  console.log(canvas.height);
  console.log(pos);
  pos = pos >= canvas.height ? canvas.height : pos + tileSize;
  drawS(cx, 5 * tileSize, pos, 0);

  // repeat
  if (!gameOver) {
    window.requestAnimationFrame(drawFrame);
  }
};
window.requestAnimationFrame(drawFrame);
