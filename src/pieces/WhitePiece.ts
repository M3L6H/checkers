import Color from "./Color";
import Piece from "./Piece";

class WhitePiece implements Piece {
  readonly color: Color;

  private _isKing: boolean;
  
  constructor() {
    this.color = Color.White;
    this._isKing = false;
  }

  get isKing(): boolean {
    return this._isKing;
  }

  promote(): void {
    this._isKing = true;
  }
}

export default WhitePiece;
