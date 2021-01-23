import { Board } from "../src";
import { Color } from "../src/pieces";
import { expect } from "chai";
import { JSDOM } from "jsdom";
import _ from "lodash";
import "mocha";

const loopThroughBoardAnd = (cb: (i: number, j: number) => unknown) => {
  for (let i = 0; i < Board.SIZE; ++i)
    for (let j = 0; j < Board.SIZE; ++j) cb(i, j);
};

describe("Board", () => {
  let board: Board;
  let dom: JSDOM;
  let document: Document;

  before(() => {
    dom = new JSDOM(`<!DOCTYPE html>
      <p>Hello World</p>
    `);
    document = dom.window.document;
    global["document"] = document;
  });
  
  beforeEach(() => board = new Board());

  describe("#pieceAt", () => {
    it("should return the piece at the given position", () => {
      for (let i = 4; i <= Board.SIZE - 3; ++i) {
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

  describe("#render", () => {
    let rootEle: HTMLDivElement;
    
    beforeEach(() => rootEle = document.createElement("div"));
    
    it(`should create an ${ Board.SIZE }x${ Board.SIZE } grid of tiles`, () => {
      board.render(rootEle);

      loopThroughBoardAnd((i, j) => {
        const tile = rootEle.children[i].children[j];
        expect(tile.classList.contains("tile")).to.be.true;
      });
    });

    it("should have empty tiles in the middle rows and white tiles", () => {
      board.render(rootEle);

      loopThroughBoardAnd((i, j) => {
        if (_.inRange(i, 4, Board.SIZE - 2) || i % 2 === j % 2) {
          const tile = rootEle.children[i].children[j];
          expect(tile.classList.contains("empty")).to.be.true;
        }
      });
    });

    describe("when flipped", () => {
      it(`should render 0,0 in the top right and ${ Board.SIZE - 1 }, ${ Board.SIZE - 1 } in the bottom left`, () => {
        board.render(rootEle, { flipped: true });

        loopThroughBoardAnd((i, j) => {
          const tile = rootEle.children[i].children[j] as HTMLDivElement;
          expect(tile.dataset.row).to.equal(i.toString());
          expect(tile.dataset.col).to.equal((Board.SIZE - j - 1).toString());
        });
      });
    });
  });
});
