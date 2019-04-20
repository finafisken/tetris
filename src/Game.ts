export default class Game {
  tileBoard: Array<Array<number>>;
  gameOver: boolean;
  score: number;

  constructor(width: number, height: number) {
    this.tileBoard = new Array(height).fill(new Array(width).fill(0));
    this.gameOver = false;
    this.score = 0;
  }

  removeRow(index: number) {
    if (index === 0) {
      // if index is top row fill with 0
      this.tileBoard[0] = Array(this.tileBoard[0].length).fill(0);
    } else {
      // take all above index row and push down by 1
      const above = this.tileBoard.slice(0, index);
      const below = this.tileBoard.slice(index + 1);
      this.tileBoard = above.concat(below);
    }
  }
}
