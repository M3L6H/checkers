import Color from "./Color";
import Piece from "./Piece";

/**
 * Represents an empty square on the {@link Board}.
 * 
 * @category Pieces
 * @extends Piece
 */
class NullPiece extends Piece {

  /**
   * @readonly
   * @property {Color} color -  The color of the NullPiece is always {@link Color}.Null.
   */
  readonly color: Color;

  constructor() {
    super();
    this.color = Color.Null;
  }

  /**
   * Getter for the isKing property. Always returns false, since a NullPiece
   * cannot be a "king."
   * 
   * @readonly
   * @type {boolean}
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
