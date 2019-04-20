const SHAPES = ["L", "J", "S", "Z", "O", "T", "I"];

/**
 * filled are marked with 1 and blanks are 0
 * 4x4 matrix mold for all shapes ordered by rows from top
 * to match game tile board
 */
const TILES = {
  L: [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]],
  J: [[0, 0, 1, 0], [0, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]],
  S: [[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  Z: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  O: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  T: [[0, 0, 1, 0], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
  I: [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]
};

const getRandomShape = () => SHAPES[Math.floor(SHAPES.length * Math.random())];

export default class Shape {
  kind: string;
  active: boolean;
  orientation: number;

  constructor() {
    this.kind = getRandomShape();
    this.active = false;
    this.orientation = 0;
  }

  spawnOnBoard(currentTileBoard) {
    const newTileBoard = [...currentTileBoard];
    // cut out 4x4 spawn area from tile board
    const spawnArea = currentTileBoard
      .slice(0, 4)
      .map(columns => columns.slice(4, 8));

    // 4x4 mold for shape
    const shapeTiles = TILES[this.kind];
    console.log(this.kind);

    shapeTiles.forEach((shapeRow, shapeRowIndex) => {
      shapeRow.forEach((shapeCol, shapeColIndex) => {
        if (shapeCol === 1) {
          newTileBoard[shapeRowIndex][shapeColIndex + 3] = 1;
          // if (currentTileBoard[shapeRowIndex][shapeColIndex + 3] === 1) {
          //   // collision
          // } else {
          //   newTileBoard[shapeRowIndex][shapeColIndex + 3] = 1;
          // }
        }
      });
    });

    // // check for colission and merge tile board
    // const occupiedTiles = [];
    // spawnArea.forEach((gameRowTiles, gameRowIndex) => {
    //   gameRowTiles.forEach((gameColumnTile, gameColumnIndex) => {

    //     if (gameColumnTile) {
    //       occupiedTiles.push([gameRowIndex, gameColumnIndex]);
    //     }
    //   });
    // });

    // newTileBoard[gameRowIndex][gameColumnIndex + 3] = 1;

    // // true if collision
    // if (occupiedTiles.some(([row, col]) => shapeTiles[row][col] === 1)) {
    //   return null;
    // }

    return newTileBoard;
  }

  makeInactive() {
    this.active = false;
  }
}
