import Color from "./Color";
import Piece from "./Piece";

class NullPiece implements Piece {
  readonly color: Color;

  private _isKing: boolean;
  
  constructor() {
    this.color = Color.Null;
    this._isKing = false;
  }

  get isKing(): boolean {
    return this._isKing;
  }

  promote(): void {
    this._isKing = false;
  }
}

export default NullPiece;
