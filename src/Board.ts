import _ from "lodash";
import Piece, { NullPiece } from "./pieces";

class Board {
  static readonly SIZE = 8;
  
  private _board: Array<Array<Piece>>;
  
  constructor() {
    this._board = Array.from({ length: Board.SIZE }, () =>
      Array.from({ length: Board.SIZE }, () => new NullPiece()));
  }

  pieceAt(row: number, col: number): Piece {
    if (!Board.areCoordsValid(row, col))
      throw new RangeError(`row '${ row }' and col '${ col }' should be between 0 and ${ Board.SIZE - 1 } inclusive`);

    // Flip col value
    col = Board.SIZE - col - 1; 

    return this._board[row][col];
  }

  private static areCoordsValid(row: number, col: number): boolean {
    return _.inRange(row, 0, Board.SIZE) && _.inRange(col, 0, Board.SIZE);
  }
}

export default Board;
