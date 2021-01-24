import Color from "./Color";
import Piece from "./Piece";

/**
 * Represents an empty square on the {@link Board}.
 * 
 * @category Pieces
 * @implements {@link Piece}
 */
class NullPiece implements Piece {

  /**
   * The color of the NullPiece is always {@link Color}.Null.
   * 
   * @readonly
   * @property {Color} color  - Always {@link Color}.Null
   */
  readonly color: Color;

  /**
   * Creates a new NullPiece.
   */
  constructor() {
    this.color = Color.Null;
  }

  /**
   * Getter for the isKing property. Always returns false, since a NullPiece
   * cannot be a "king."
   * 
   * @readonly
   * @property {boolean} isKing - Always false
   */
  get isKing(): boolean { return false; } // eslint-disable-line

  /**
   * Method stub implemented for the {@link Piece} interface.
   * Does nothing, since a NullPiece cannot promote.
   */
  public promote(): void { } // eslint-disable-line
}

export default NullPiece;
