import Color from "./Color";
import Piece from "./Piece";

class BlackPiece implements Piece {
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