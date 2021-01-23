import { Board } from "../src";
import { Color } from "../src/pieces";
import { expect } from "chai";
import "mocha";

describe("Board", () => {
  let board: Board;

  beforeEach(() => {
    board = new Board();
  });
  
  describe ("#pieceAt", () => {
    it("should return the piece at the given position", () => {
      for (let i = 4; i <= 5; ++i) {
        for (let j = 0; j < 8; ++j)
          expect(board.pieceAt(i, j).color).to.equal(Color.Null);
      }
    });

    it("should throw an error if given invalid coordinates", () => {
      expect(() => board.pieceAt(-1, 0)).to.throw(RangeError);
      expect(() => board.pieceAt(0, -1)).to.throw(RangeError);
      expect(() => board.pieceAt(Board.SIZE, 0)).to.throw(RangeError);
      expect(() => board.pieceAt(0, Board.SIZE)).to.throw(RangeError);
    });
  });
});
