import _ from "lodash";
import Piece, { BlackPiece, Color, NullPiece, RedPiece } from "./pieces";

class Board {
  static readonly SIZE = 8;
  
  private _board: Array<Array<Piece>>;
  
  constructor() {
    this._board = Array.from({ length: Board.SIZE }, (_e, i) =>
      Array.from({ length: Board.SIZE }, (_f, j) => {
        if (_.inRange(i, 3, Board.SIZE - 3) || i % 2 !== j % 2) 
          return new NullPiece();
        else if (i < 3)
          return new BlackPiece();
        else
          return new RedPiece();
      }));
  }

  pieceAt(row: number, col: number): Piece {
    if (!Board.areCoordsValid(row, col))
      throw new RangeError(Board.coordsErrorMsg(row, col));

    // Flip row value
    row = Board.SIZE - row - 1; 

    return this._board[row][col];
  }

  isEmpty(row: number, col: number): boolean {
    return this.pieceAt(row, col).color === Color.Null;
  }

  render(rootEle: HTMLDivElement, { flipped=false }: RenderOpts={}): void {
    let row = flipped ? 0 : Board.SIZE - 1;
    const rowInc = flipped ? 1 : -1;

    while (_.inRange(row, 0, Board.SIZE)) {
      const rowEle = Board.createRow(row);
      
      let col = flipped ? Board.SIZE - 1 : 0;
      const colInc = flipped ? -1 : 1;

      while (_.inRange(col, 0, Board.SIZE)) {
        const tileEle = Board.createTile(row, col, this.isEmpty(row, col));
        rowEle.appendChild(tileEle);
        
        col += colInc;
      }

      rootEle.appendChild(rowEle);
      
      row += rowInc;
    }
  }

  private static coordsErrorMsg(row: number, col: number): string {
    return `row '${ row }' and col '${ col }' should be between 0 and ${ Board.SIZE - 1 } inclusive`;
  }

  private static areCoordsValid(row: number, col: number): boolean {
    return _.inRange(row, 0, Board.SIZE) && _.inRange(col, 0, Board.SIZE);
  }

  private static createRow(row: number): HTMLDivElement {
    const rowEle = document.createElement("div");

    rowEle.classList.add("row");
    rowEle.dataset.row = row.toString();

    return rowEle;
  }

  private static createTile(row: number, col: number, empty: boolean): HTMLDivElement {
    const tileEle = document.createElement("div");

    tileEle.classList.add("tile");
    if (empty) tileEle.classList.add("empty");
    tileEle.classList.add((row % 2 === col % 2) ? "white" : "black");
    
    tileEle.dataset.row = row.toString();
    tileEle.dataset.col = col.toString();
    
    return tileEle;
  }
}

interface RenderOpts {
  flipped?: boolean
}

export default Board;
