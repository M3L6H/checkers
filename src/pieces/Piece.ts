import Color from "./Color";

/**
 * Defines the base class of a checkers piece.
 * 
 * @abstract
 * @category Pieces
 * 
 * @mermaid
 * classDiagram
 *  Piece <|-- NullPiece : extends
 *  Piece <|-- BlackPiece : extends
 *  Piece <|-- RedPiece : extends
 *  Piece: +Color color*
 *  Piece: +boolean isKing
 *  Piece: !boolean _isKing
 *  Piece: +promote()
 *  NullPiece: +Color color
 *  NullPiece: +boolean isKing
 *  NullPiece: +promote()
 *  BlackPiece: +Color color
 *  RedPiece: +Color color
 */
abstract class Piece {

  /**
   * @abstract
   * @readonly
   * @property {Color} color  - The {@link Color} of the piece
   */
  abstract readonly color: Color;
  
  protected _isKing: boolean;

  constructor() {
    this._isKing = false;
  }

  /**
   * @readonly
   * @type {boolean}
   * @property {boolean} isKing - Whether this piece is a king
   */
  get isKing(): boolean {
    return this._isKing;
  }

  /**
   * Promotes the piece into a King, if applicable.
   * 
   * @see NullPiece
   */
  public promote(): void {
    this._isKing = true;
  }
}

export default Piece;
