import config from "./config";
import { drawT, drawO, drawS } from "./draw/shapes";

const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
const { tileSize } = config;
canvas.width = 10 * tileSize;
canvas.height = 20 * tileSize;

const cx = canvas.getContext("2d");
let pos = 0;
let gameOver = true;
const drawFrame = () => {
  // clear previous frame
  cx.clearRect(0, 0, canvas.width, canvas.height);
  pos += 1;
  drawT(cx, 150, pos, 0);
  if (!gameOver) {
    window.requestAnimationFrame(drawFrame);
  }
};
window.requestAnimationFrame(drawFrame);
