import Piece from "./pieces";

class Board {
  private board: Array<Array<Piece>>;
  
  constructor() {
    this.board = [
      []
    ];
  }
}

export default Board;
