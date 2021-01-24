import Color from "./Color";
import Piece from "./Piece";

/**
 * Represents a red piece on the {@link Board}.
 * 
 * @category Pieces
 * @extends Piece
 */
class RedPiece extends Piece {

  /**
   * The color of a red piece is always {@link Color}.Red.
   * 
   * @readonly
   * @property {Color} color  - Always {@link Color}.Red
   */
  readonly color: Color;

  constructor() {
    super();
    this.color = Color.Red;
  }
}

export default RedPiece;
