import Color from "./Color";
import Piece from "./Piece";

/**
 * Represents a black piece on the {@link Board}.
 * 
 * @category Pieces
 * @implements {@link Piece}
 */
class BlackPiece implements Piece {

  /**
   * The color of a black piece is always {@link Color}.Black.
   * 
   * @readonly
   * @property {Color} color  - Always {@link Color}.Black
   */
  readonly color: Color;

  private _isKing: boolean;

  constructor() {
    this.color = Color.Black;
    this._isKing = false;
  }

  get isKing(): boolean {
    return this._isKing;
  }

  promote(): void {
    this._isKing = true;
  }
}

export default BlackPiece;
