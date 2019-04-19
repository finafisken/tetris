import config from "./config";
import drawShape from "./draw/shape";

const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
const { tileSize } = config;
canvas.width = 10 * tileSize;
canvas.height = 20 * tileSize;

const cx = canvas.getContext("2d");

const drawFrame = () => {
  // clear previous frame
  cx.clearRect(0, 0, canvas.width, canvas.height);

  drawShape(cx, 150, 150, "lul");
  // cx.fillStyle = "salmon";
  // cx.fillRect(0, 0, tileSize, tileSize); // negative coords so we can calc pos easier
  // cx.fillRect(tileSize, 0, tileSize, tileSize); // negative coords so we can calc pos easier
};
drawFrame();
