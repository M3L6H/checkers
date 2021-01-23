import Piece, { Color, BlackPiece } from "../../src/pieces";
import { expect } from "chai";
import "mocha";

describe("BlackPiece", () => {
  let piece: Piece;

  beforeEach(() => piece = new BlackPiece());

  describe("color", () => {
    it("should be Black", () =>
      expect(piece.color).to.equal(Color.Black)
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
