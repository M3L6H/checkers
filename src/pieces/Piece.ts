import Color from "./Color";

/**
 * Defines the interface of a checkers piece.
 * 
 * @category Pieces
 */
interface Piece {

  /**
   * The {@link Color} of a piece.
   * @readonly
   */
  readonly color: Color;

  /**
   * Whether or not the piece is a king.
   * @readonly
   */
  readonly isKing: boolean;

  /**
   * Promotes the piece into a King, if applicable.
   * 
   * @method promote
   * @see NullPiece
   */
  promote(): void;
}

export default Piece;
