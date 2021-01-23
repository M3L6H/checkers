import Piece, { Color, RedPiece } from "../../src/pieces";
import { expect } from "chai";
import "mocha";

describe("RedPiece", () => {
  let piece: Piece;

  beforeEach(() => piece = new RedPiece());

  describe("color", () => {
    it("should be Red", () =>
      expect(piece.color).to.equal(Color.Red)
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
