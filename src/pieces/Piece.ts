import Color from "./Color";

export default interface Piece {
  readonly color: Color;
  isEmpty(): boolean;
}
