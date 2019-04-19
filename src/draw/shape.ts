import config from "../config";

const { tileSize } = config;

export default (cx, posX, posY, orientation) => {
  console.log(orientation);
  cx.fillStyle = "salmon";
  cx.fillRect(posX, posY, tileSize, tileSize);
  cx.fillRect(posX + tileSize, posY, tileSize, tileSize);
  cx.fillRect(posX + tileSize, posY + tileSize, tileSize, tileSize);
  cx.fillRect(posX + tileSize, posX + 2 * tileSize, tileSize, tileSize);
};
