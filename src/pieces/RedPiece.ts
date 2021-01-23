import Color from "./Color";
import Piece from "./Piece";

class RedPiece implements Piece {
  readonly color: Color;

  private _isKing: boolean;
  
  constructor() {
    this.color = Color.Red;
    this._isKing = false;
  }

  get isKing(): boolean {
    return this._isKing;
  }

  promote(): void {
    this._isKing = true;
  }
}

export default RedPiece;
