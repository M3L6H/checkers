import Color from "./Color";
import Piece from "./Piece";

class RedPiece extends Piece {
  readonly color: Color;

  constructor() {
    super();
    this.color = Color.Red;
  }
}

export default RedPiece;
