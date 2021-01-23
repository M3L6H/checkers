import Color from "./Color";
import Piece from "./Piece";

export default class NullPiece implements Piece {
  readonly color: Color;
  
  constructor() {
    this.color = Color.Null;
  }

  isEmpty() {
    return true;
  }

  isKing() {
    return false;
  }
}
