import Color from "./Color";
import Piece from "./Piece";

/**
 * Represents a black piece on the {@link Board}.
 * 
 * @category Pieces
 * @extends Piece
 */
class BlackPiece extends Piece {

  /**
   * The color of a black piece is always {@link Color}.Black.
   * 
   * @readonly
   * @property {Color} color  - Always {@link Color}.Black
   */
  readonly color: Color;

  constructor() {
    super();
    this.color = Color.Black;
  }
}

export default BlackPiece;
