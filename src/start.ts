import Board from "./Board";

import "../style/index.scss";

const boardEle = document.querySelector("div#board") as HTMLDivElement;
const board = new Board();

board.render(boardEle);
