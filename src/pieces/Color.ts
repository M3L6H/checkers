/**
 * Enum for the possible piece colors.
 * Has no reflection on the actual appearance of the pieces.
 * 
 * @category Pieces
 * @type {enum}
 * 
 * @property {number} Color.Null  - Used by the {@link NullPiece}
 * @property {number} Color.Black - Color for the black pieces
 * @property {number} Color.Red   - Color for the red pieces
 */
enum Color {
  Null,
  Black,
  Red
}

export default Color;
