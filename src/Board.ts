import Piece from "./pieces";

export default class Board {
  private board: Array<Array<Piece>>;
  
  constructor() {
    this.board = [
      []
    ];
  }
}
