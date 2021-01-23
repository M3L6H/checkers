import Piece, { Color, NullPiece } from "../../src/pieces";
import { expect } from "chai";
import "mocha";

describe("NullPiece", () => {
  let piece: Piece;
  
  beforeEach(() => piece = new NullPiece());

  describe("color", () => {
    it("should be Null", () =>
      expect(piece.color).to.equal(Color.Null)
    );
  });
  
  describe("isKing", () => {
    it("should return false", () =>
      expect(piece.isKing).to.be.false
    );
  });

  describe("#promote", () => {
    it("should not do anything", () => {
      expect(piece.isKing).to.be.false;
      piece.promote();
      expect(piece.isKing).to.be.false;
    });
  });
});
