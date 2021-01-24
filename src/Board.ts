import _ from "lodash";
import Piece, { BlackPiece, Color, NullPiece, RedPiece } from "./pieces";

/**
 * Board class which holds the pieces and tracks their movement.
 * Initializes with the red pieces on the first three rows on dark tiles and
 * the black pieces on the last three rows on dark tiles.
 * 
 * @category Board
 * @example
 * // Creates a new instance of the Board class
 * const board = new Board();
 * 
 * // Will Be a red piece
 * const redPiece = board.pieceAt(0, 1);
 * 
 * // Will be a black piece
 * const blackPiece = board.pieceAt(7, 0);
 * 
 * // Will be empty
 * const isEmpty = board.isEmpty(4, 4);
 */
class Board {
  /**
   * @type {number}
   * @constant
   * @property {number} SIZE -  The width/height of the board in tiles
   */
  static readonly SIZE: number = 8;
  
  private _board: Array<Array<Piece>>;
  
  constructor() {
    // Populate the board array with pieces
    this._board = Array.from({ length: Board.SIZE }, (_e, i) =>
      Array.from({ length: Board.SIZE }, (_f, j) => {
        if (_.inRange(i, 3, Board.SIZE - 3) || i % 2 !== j % 2) 
          return new NullPiece();
        // In the array, row 0 is the top of the board
        else if (i < 3)
          return new BlackPiece();
        else
          return new RedPiece();
      }));
  }
  
  /**
   * Returns the {@link Piece} at the given coordinates.
   * 0,0 is in the bottom left of the board.
   * 
   * @param {number} row - The row to check
   * @param {number} col - The column to check
   * @returns {Piece} The piece at the given coordinates
   * @throws {RangeError} Both row and col must be between 0 and Board.SIZE - 1 inclusive
   */
  public pieceAt(row: number, col: number): Piece {
    if (!Board.areCoordsValid(row, col))
      throw new RangeError(Board.coordsErrorMsg(row, col));

    // Flip row value
    row = Board.SIZE - row - 1; 

    return this._board[row][col];
  }

  /**
   * Returns whether the tile at the given coordinates is empty.
   * 0,0 is in the bottom left of the board.
   * 
   * @param {number} row - The row to check
   * @param {number} col - The column to check
   * @returns {boolean} Whether the tile at the given coordinates is empty
   * @throws {RangeError} Both row and col must be between 0 and Board.SIZE - 1 inclusive
   */
  public isEmpty(row: number, col: number): boolean {
    return this.pieceAt(row, col).color === Color.Null;
  }

  /**
   * Generates the relevant HTML elements and appends them to the passed root
   * element.
   * Also calls render on the pieces.
   * 
   * @param {HTMLDivElement} rootEle -  The root div containing the board
   * @param {BoardRenderOpts} [options={}] - Options to pass to the board renderer
   * @param {boolean} [options.flipped=false] - Whether to render the board flipped
   * 
   * @see BoardRenderOpts
   */
  public render(rootEle: HTMLDivElement, { flipped=false }: BoardRenderOpts={}): void {
    let row = flipped ? 0 : Board.SIZE - 1;
    const rowInc = flipped ? 1 : -1;

    // Iterate through the board array and generate the appropriate html
    while (_.inRange(row, 0, Board.SIZE)) {
      let col = flipped ? Board.SIZE - 1 : 0;
      const colInc = flipped ? -1 : 1;

      while (_.inRange(col, 0, Board.SIZE)) {
        const tileEle = Board.createTile(row, col, this.isEmpty(row, col));
        rootEle.appendChild(tileEle);
        
        col += colInc;
      }

      row += rowInc;
    }
  }

  // Generates the appropriate error message for the given coordinates
  private static coordsErrorMsg(row: number, col: number): string {
    return `row '${ row }' and col '${ col }' should be between 0 and ${ Board.SIZE - 1 } inclusive`;
  }

  // Returns whether the given coordinates are valid
  private static areCoordsValid(row: number, col: number): boolean {
    return _.inRange(row, 0, Board.SIZE) && _.inRange(col, 0, Board.SIZE);
  }

  // Creates the html for a tile element
  private static createTile(row: number, col: number, empty: boolean): HTMLDivElement {
    const tileEle = document.createElement("div");

    tileEle.classList.add("tile");
    if (empty) tileEle.classList.add("empty");
    tileEle.classList.add((row % 2 === col % 2) ? "red" : "black");
    
    tileEle.dataset.row = row.toString();
    tileEle.dataset.col = col.toString();
    
    return tileEle;
  }
}

/**
 * Options that change how the board is rendered
 * 
 * @category Board
 * @see Board
 */
interface BoardRenderOpts {
  /**
   * Whether to render the board flipped
   */
  flipped?: boolean
}

export default Board;
