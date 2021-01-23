import Piece, { Color, WhitePiece } from "../../src/pieces";
import { expect } from "chai";
import "mocha";

describe("WhitePiece", () => {
  let piece: Piece;

  beforeEach(() => piece = new WhitePiece());

  describe("color", () => {
    it("should be White", () =>
      expect(piece.color).to.equal(Color.White)
    );
  });

  describe("isKing", () => {
    it("should be false by default", () =>
      expect(piece.isKing).to.be.false
    );
  });

  describe("#promote", () => {
    it("should turn the piece into a king", () => {
      expect(piece.isKing).to.be.false;
      piece.promote();
      expect(piece.isKing).to.be.true;
    });
  });
});
