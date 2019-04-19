import config from "../config";

const { tileSize } = config;

/**
 * tiles are marked with 1 and blanks are 0
 * in 4x4 matrix mold for all shapes
 */
const shapes = {
  L: {
    color: "salmon",
    tiles: [[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },
  J: {
    color: "greenyellow",
    tiles: [[1, 1, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },
  S: {
    color: "teal",
    tiles: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },
  Z: {
    color: "goldenrod",
    tiles: [[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },
  O: {
    color: "red",
    tiles: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },
  T: {
    color: "turquoise",
    tiles: [[0, 1, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },
  I: {
    color: "rebeccapurple",
    tiles: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]
  }
};

const rotate = {
  0: tiles => tiles,
  90: tiles => tiles[0].map((col, i) => tiles.map(row => row[i])),
  180: tiles => [tiles[3], tiles[2], tiles[1], tiles[0]],
  270: tiles => rotate[90](rotate[180](tiles))
};

const drawShape = shape => (canvasContext, posX, posY, orientation) => {
  const { color, tiles } = shapes[shape];
  const rotatedTiles = rotate[orientation](tiles);

  canvasContext.fillStyle = color;
  rotatedTiles.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col) {
        // position is filled
        canvasContext.fillRect(
          posX + tileSize * rowIdx,
          posY + tileSize * colIdx,
          tileSize,
          tileSize
        );
      }
    });
  });
};

export const drawL = drawShape("L");
export const drawJ = drawShape("J");
export const drawS = drawShape("S");
export const drawZ = drawShape("Z");
export const drawO = drawShape("O");
export const drawT = drawShape("T");
export const drawI = drawShape("I");
