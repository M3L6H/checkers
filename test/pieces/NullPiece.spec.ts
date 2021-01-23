import { Color, NullPiece } from "../../src/pieces";
import { expect } from "chai";
import "mocha";

describe("NullPiece", () => {
  let piece: NullPiece;
  
  beforeEach(() => {
    piece = new NullPiece();
  });

  describe("color", () => {
    it("should be Null", () => {
      expect(piece.color).to.equal(Color.Null);
    });
  });
  
  describe("#isEmpty", () => {
    it("should return true", () => {
      expect(piece.isEmpty()).to.be.true;
    });
  });

  describe("#isKing", () => {
    it("should return false", () => {
      expect(piece.isKing()).to.be.false;
    });
  });
});
