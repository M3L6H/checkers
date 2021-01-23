import Color from "./Color";

interface Piece {
  readonly color: Color;
  readonly isKing: boolean;
  promote(): void;
}

export default Piece;
