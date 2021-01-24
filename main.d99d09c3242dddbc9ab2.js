(self["webpackChunkcheckers"] = self["webpackChunkcheckers"] || []).push([["main"],{

/***/ 191:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1, h2, h3, h4, h5, h6,\ndiv, section, span, main, body,\nform, input, button, textarea,\nimg, p, a, blockquote, pre,\nol, ul, li, i {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background: transparent;\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  font-size: inherit;\n  font-style: normal;\n  font-family: \"Open Sans\", sans-serif;\n  outline: none;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: underline;\n  cursor: pointer;\n}\na:hover {\n  filter: brightness(90%);\n}\n\n.board-container {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n}\n.board-container .board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n.board-container .board .tile.black {\n  background-color: #0f0f0f;\n}\n.board-container .board .tile.red {\n  background-color: #d35f5f;\n}\n\n.center-column {\n  max-width: 768px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./style/_reset.scss","webpack://./style/index.scss","webpack://./style/_board.scss","webpack://./style/_vars.scss","webpack://./style/_page.scss"],"names":[],"mappings":"AAAA;;;;;EAKE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EAEA,cAAA;EAEA,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,oCAAA;EACA,aAAA;ACDF;;ADIA;EACE,gBAAA;ACDF;;ADIA;EACE,0BAAA;EACA,eAAA;ACDF;ADGE;EACE,uBAAA;ACDJ;;AC1BA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;AD6BF;AC3BE;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EAEA,aAAA;EACA,qCAAA;AD4BJ;ACzBM;EACE,yBCfA;AF0CR;ACxBM;EACE,yBClBF;AF4CN;;AG/CA;EACE,gBDFW;ECGX,cAAA;EAEA,aAAA;EACA,mBAAA;AHiDF","sourcesContent":["h1, h2, h3, h4, h5, h6,\ndiv, section, span, main, body,\nform, input, button, textarea,\nimg, p, a, blockquote, pre,\nol, ul, li, i {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background: transparent;\n  border: none;\n\n  color: inherit;\n\n  text-decoration: none;\n  font-size: inherit;\n  font-style: normal;\n  font-family: \"Open Sans\", sans-serif;\n  outline: none;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: underline;\n  cursor: pointer;\n\n  &:hover {\n    filter: brightness(90%);\n  }\n}\n","h1, h2, h3, h4, h5, h6,\ndiv, section, span, main, body,\nform, input, button, textarea,\nimg, p, a, blockquote, pre,\nol, ul, li, i {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background: transparent;\n  border: none;\n  color: inherit;\n  text-decoration: none;\n  font-size: inherit;\n  font-style: normal;\n  font-family: \"Open Sans\", sans-serif;\n  outline: none;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: underline;\n  cursor: pointer;\n}\na:hover {\n  filter: brightness(90%);\n}\n\n.board-container {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n}\n.board-container .board {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n}\n.board-container .board .tile.black {\n  background-color: #0f0f0f;\n}\n.board-container .board .tile.red {\n  background-color: #d35f5f;\n}\n\n.center-column {\n  max-width: 768px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n}","@use \"vars\" as vars;\n\n.board-container {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n\n  .board {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    \n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n  \n    .tile {\n      &.black {\n        background-color: vars.$black;\n      }\n  \n      &.red {\n        background-color: vars.$red;\n      }\n    }\n  }\n}\n","// Breakpoints\n$bkp-tablet: 768px;\n\n// Colors\n$black: #0f0f0f !default;\n$red: #d35f5f !default;\n","@use \"vars\" as vars;\n\n.center-column {\n  max-width: vars.$bkp-tablet;\n  margin: 0 auto;\n\n  display: flex;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 866:
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ 191);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 336:
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ 486));
const pieces_1 = __webpack_require__(/*! ./pieces */ 66);
/**
 * Board class which holds the pieces and tracks their movement.
 * Initializes with the red pieces on the first three rows on dark tiles and
 * the black pieces on the last three rows on dark tiles.
 *
 * @category Board
 * @example
 * // Creates a new instance of the Board class
 * const board = new Board();
 *
 * // Will Be a red piece
 * const redPiece = board.pieceAt(0, 1);
 *
 * // Will be a black piece
 * const blackPiece = board.pieceAt(7, 0);
 *
 * // Will be empty
 * const isEmpty = board.isEmpty(4, 4);
 */
class Board {
    constructor() {
        // Populate the board array with pieces
        this._board = Array.from({ length: Board.SIZE }, (_e, i) => Array.from({ length: Board.SIZE }, (_f, j) => {
            if (lodash_1.default.inRange(i, 3, Board.SIZE - 3) || i % 2 !== j % 2)
                return new pieces_1.NullPiece();
            // In the array, row 0 is the top of the board
            else if (i < 3)
                return new pieces_1.BlackPiece();
            else
                return new pieces_1.RedPiece();
        }));
    }
    /**
     * Returns the {@link Piece} at the given coordinates.
     * 0,0 is in the bottom left of the board.
     *
     * @param {number} row - The row to check
     * @param {number} col - The column to check
     * @returns {Piece} The piece at the given coordinates
     * @throws {RangeError} Both row and col must be between 0 and Board.SIZE - 1 inclusive
     */
    pieceAt(row, col) {
        if (!Board.areCoordsValid(row, col))
            throw new RangeError(Board.coordsErrorMsg(row, col));
        // Flip row value
        row = Board.SIZE - row - 1;
        return this._board[row][col];
    }
    /**
     * Returns whether the tile at the given coordinates is empty.
     * 0,0 is in the bottom left of the board.
     *
     * @param {number} row - The row to check
     * @param {number} col - The column to check
     * @returns {boolean} Whether the tile at the given coordinates is empty
     * @throws {RangeError} Both row and col must be between 0 and Board.SIZE - 1 inclusive
     */
    isEmpty(row, col) {
        return this.pieceAt(row, col).color === pieces_1.Color.Null;
    }
    /**
     * Generates the relevant HTML elements and appends them to the passed root
     * element.
     * Also calls render on the pieces.
     *
     * @param {HTMLDivElement} rootEle -  The root div containing the board
     * @param {BoardRenderOpts} [options={}] - Options to pass to the board renderer
     * @param {boolean} [options.flipped=false] - Whether to render the board flipped
     *
     * @see BoardRenderOpts
     */
    render(rootEle, { flipped = false } = {}) {
        let row = flipped ? 0 : Board.SIZE - 1;
        const rowInc = flipped ? 1 : -1;
        // Iterate through the board array and generate the appropriate html
        while (lodash_1.default.inRange(row, 0, Board.SIZE)) {
            let col = flipped ? Board.SIZE - 1 : 0;
            const colInc = flipped ? -1 : 1;
            while (lodash_1.default.inRange(col, 0, Board.SIZE)) {
                const tileEle = Board.createTile(row, col, this.isEmpty(row, col));
                rootEle.appendChild(tileEle);
                col += colInc;
            }
            row += rowInc;
        }
    }
    // Generates the appropriate error message for the given coordinates
    static coordsErrorMsg(row, col) {
        return `row '${row}' and col '${col}' should be between 0 and ${Board.SIZE - 1} inclusive`;
    }
    // Returns whether the given coordinates are valid
    static areCoordsValid(row, col) {
        return lodash_1.default.inRange(row, 0, Board.SIZE) && lodash_1.default.inRange(col, 0, Board.SIZE);
    }
    // Creates the html for a tile element
    static createTile(row, col, empty) {
        const tileEle = document.createElement("div");
        tileEle.classList.add("tile");
        if (empty)
            tileEle.classList.add("empty");
        tileEle.classList.add((row % 2 === col % 2) ? "red" : "black");
        tileEle.dataset.row = row.toString();
        tileEle.dataset.col = col.toString();
        return tileEle;
    }
}
/**
 * @type {number}
 * @constant
 * @property {number} SIZE -  The width/height of the board in tiles
 */
Board.SIZE = 8;
exports.default = Board;


/***/ }),

/***/ 606:
/*!**********************************!*\
  !*** ./src/pieces/BlackPiece.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Color_1 = __importDefault(__webpack_require__(/*! ./Color */ 158));
const Piece_1 = __importDefault(__webpack_require__(/*! ./Piece */ 314));
/**
 * Represents a black piece on the {@link Board}.
 *
 * @category Pieces
 * @extends Piece
 */
class BlackPiece extends Piece_1.default {
    constructor() {
        super();
        this.color = Color_1.default.Black;
    }
}
exports.default = BlackPiece;


/***/ }),

/***/ 158:
/*!*****************************!*\
  !*** ./src/pieces/Color.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Enum for the possible piece colors.
 * Has no reflection on the actual appearance of the pieces.
 *
 * @category Pieces
 * @type {enum}
 *
 * @property {number} Color.Null  - Used by the {@link NullPiece}
 * @property {number} Color.Black - Color for the black pieces
 * @property {number} Color.Red   - Color for the red pieces
 */
var Color;
(function (Color) {
    Color[Color["Null"] = 0] = "Null";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
exports.default = Color;


/***/ }),

/***/ 438:
/*!*********************************!*\
  !*** ./src/pieces/NullPiece.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Color_1 = __importDefault(__webpack_require__(/*! ./Color */ 158));
const Piece_1 = __importDefault(__webpack_require__(/*! ./Piece */ 314));
/**
 * Represents an empty square on the {@link Board}.
 *
 * @category Pieces
 * @extends Piece
 */
class NullPiece extends Piece_1.default {
    constructor() {
        super();
        this.color = Color_1.default.Null;
    }
    /**
     * Getter for the isKing property. Always returns false, since a NullPiece
     * cannot be a "king."
     *
     * @readonly
     * @type {boolean}
     * @property {boolean} isKing - Always false
     */
    get isKing() { return false; } // eslint-disable-line
    /**
     * Method stub implemented for the {@link Piece} interface.
     * Does nothing, since a NullPiece cannot promote.
     */
    promote() { } // eslint-disable-line
}
exports.default = NullPiece;


/***/ }),

/***/ 314:
/*!*****************************!*\
  !*** ./src/pieces/Piece.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Defines the base class of a checkers piece.
 *
 * @abstract
 * @category Pieces
 *
 * @mermaid
 * classDiagram
 *  Piece <|-- NullPiece : extends
 *  Piece <|-- BlackPiece : extends
 *  Piece <|-- RedPiece : extends
 *  Piece: +Color color*
 *  Piece: +boolean isKing
 *  Piece: !boolean _isKing
 *  Piece: +promote()
 *  NullPiece: +Color color
 *  NullPiece: +boolean isKing
 *  NullPiece: +promote()
 *  BlackPiece: +Color color
 *  RedPiece: +Color color
 */
class Piece {
    constructor() {
        this._isKing = false;
    }
    /**
     * @readonly
     * @type {boolean}
     * @property {boolean} isKing - Whether this piece is a king
     */
    get isKing() {
        return this._isKing;
    }
    /**
     * Promotes the piece into a King, if applicable.
     *
     * @see NullPiece
     */
    promote() {
        this._isKing = true;
    }
}
exports.default = Piece;


/***/ }),

/***/ 774:
/*!********************************!*\
  !*** ./src/pieces/RedPiece.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Color_1 = __importDefault(__webpack_require__(/*! ./Color */ 158));
const Piece_1 = __importDefault(__webpack_require__(/*! ./Piece */ 314));
/**
 * Represents a red piece on the {@link Board}.
 *
 * @category Pieces
 * @extends Piece
 */
class RedPiece extends Piece_1.default {
    constructor() {
        super();
        this.color = Color_1.default.Red;
    }
}
exports.default = RedPiece;


/***/ }),

/***/ 66:
/*!*****************************!*\
  !*** ./src/pieces/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedPiece = exports.NullPiece = exports.Color = exports.BlackPiece = exports.default = void 0;
var Piece_1 = __webpack_require__(/*! ./Piece */ 314);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(Piece_1).default; } }));
var BlackPiece_1 = __webpack_require__(/*! ./BlackPiece */ 606);
Object.defineProperty(exports, "BlackPiece", ({ enumerable: true, get: function () { return __importDefault(BlackPiece_1).default; } }));
var Color_1 = __webpack_require__(/*! ./Color */ 158);
Object.defineProperty(exports, "Color", ({ enumerable: true, get: function () { return __importDefault(Color_1).default; } }));
var NullPiece_1 = __webpack_require__(/*! ./NullPiece */ 438);
Object.defineProperty(exports, "NullPiece", ({ enumerable: true, get: function () { return __importDefault(NullPiece_1).default; } }));
var RedPiece_1 = __webpack_require__(/*! ./RedPiece */ 774);
Object.defineProperty(exports, "RedPiece", ({ enumerable: true, get: function () { return __importDefault(RedPiece_1).default; } }));


/***/ }),

/***/ 221:
/*!**********************!*\
  !*** ./src/start.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Board_1 = __importDefault(__webpack_require__(/*! ./Board */ 336));
__webpack_require__(/*! ../style/index.scss */ 866);
const boardEle = document.querySelector("div#board");
const board = new Board_1.default();
board.render(boardEle);


/***/ })

},
0,[[221,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja2Vycy8uL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zdHlsZS9pbmRleC5zY3NzPzAzNjMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvcGllY2VzL0JsYWNrUGllY2UudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvcGllY2VzL0NvbG9yLnRzIiwid2VicGFjazovL2NoZWNrZXJzLy4vc3JjL3BpZWNlcy9OdWxsUGllY2UudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvcGllY2VzL1BpZWNlLnRzIiwid2VicGFjazovL2NoZWNrZXJzLy4vc3JjL3BpZWNlcy9SZWRQaWVjZS50cyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL3NyYy9waWVjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0xBQWdMLGNBQWMsZUFBZSwyQkFBMkIsNEJBQTRCLGlCQUFpQixtQkFBbUIsMEJBQTBCLHVCQUF1Qix1QkFBdUIsMkNBQTJDLGtCQUFrQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsT0FBTywrQkFBK0Isb0JBQW9CLEdBQUcsV0FBVyw0QkFBNEIsR0FBRyxzQkFBc0IsZ0JBQWdCLHNCQUFzQix1QkFBdUIsR0FBRywyQkFBMkIsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsa0JBQWtCLDBDQUEwQyxHQUFHLHVDQUF1Qyw4QkFBOEIsR0FBRyxxQ0FBcUMsOEJBQThCLEdBQUcsb0JBQW9CLHFCQUFxQixtQkFBbUIsa0JBQWtCLHdCQUF3QixHQUFHLE9BQU8scU5BQXFOLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFV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Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0gsTUFBZSxLQUFLO0lBV2xCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEckIseUVBQTRCO0FBQzVCLHlFQUE0QjtBQUU1Qjs7Ozs7R0FLRztBQUNILE1BQU0sUUFBUyxTQUFRLGVBQUs7SUFVMUI7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLEdBQUcsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeEIsc0RBQWtDO0FBQXpCLHlIQUFPO0FBQ2hCLGdFQUFxRDtBQUE1QyxpSUFBTyxRQUFjO0FBQzlCLHNEQUEyQztBQUFsQyx1SEFBTyxRQUFTO0FBQ3pCLDhEQUFtRDtBQUExQywrSEFBTyxRQUFhO0FBQzdCLDREQUFpRDtBQUF4Qyw2SEFBTyxRQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0o1Qix5RUFBNEI7QUFFNUIsb0RBQTZCO0FBRTdCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFtQixDQUFDO0FBQ3ZFLE1BQU0sS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7QUFFMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmQ5OWQwOWMzMjQyZGRkYmM5YWIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxcbmRpdiwgc2VjdGlvbiwgc3BhbiwgbWFpbiwgYm9keSxcXG5mb3JtLCBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSxcXG5pbWcsIHAsIGEsIGJsb2NrcXVvdGUsIHByZSxcXG5vbCwgdWwsIGxpLCBpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmE6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciAuYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIC50aWxlLmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMGY7XFxufVxcbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIC50aWxlLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1ZjVmO1xcbn1cXG5cXG4uY2VudGVyLWNvbHVtbiB7XFxuICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3N0eWxlL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3N0eWxlL19ib2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZS9fdmFycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZS9fcGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztFQUtFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLHVCQUFBO0FDREo7O0FDMUJBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUQ2QkY7QUMzQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBQ0EscUNBQUE7QUQ0Qko7QUN6Qk07RUFDRSx5QkNmQTtBRjBDUjtBQ3hCTTtFQUNFLHlCQ2xCRjtBRjRDTjs7QUcvQ0E7RUFDRSxnQkRGVztFQ0dYLGNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUhpREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcXG5kaXYsIHNlY3Rpb24sIHNwYW4sIG1haW4sIGJvZHksXFxuZm9ybSwgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsXFxuaW1nLCBwLCBhLCBibG9ja3F1b3RlLCBwcmUsXFxub2wsIHVsLCBsaSwgaSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgY29sb3I6IGluaGVyaXQ7XFxuXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbiAgfVxcbn1cXG5cIixcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXFxuZGl2LCBzZWN0aW9uLCBzcGFuLCBtYWluLCBib2R5LFxcbmZvcm0sIGlucHV0LCBidXR0b24sIHRleHRhcmVhLFxcbmltZywgcCwgYSwgYmxvY2txdW90ZSwgcHJlLFxcbm9sLCB1bCwgbGksIGkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciAuYm9hcmQgLnRpbGUuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciAuYm9hcmQgLnRpbGUucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzVmNWY7XFxufVxcblxcbi5jZW50ZXItY29sdW1uIHtcXG4gIG1heC13aWR0aDogNzY4cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIixcIkB1c2UgXFxcInZhcnNcXFwiIGFzIHZhcnM7XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgXFxuICAgIC50aWxlIHtcXG4gICAgICAmLmJsYWNrIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcnMuJGJsYWNrO1xcbiAgICAgIH1cXG4gIFxcbiAgICAgICYucmVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcnMuJHJlZDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvLyBCcmVha3BvaW50c1xcbiRia3AtdGFibGV0OiA3NjhweDtcXG5cXG4vLyBDb2xvcnNcXG4kYmxhY2s6ICMwZjBmMGYgIWRlZmF1bHQ7XFxuJHJlZDogI2QzNWY1ZiAhZGVmYXVsdDtcXG5cIixcIkB1c2UgXFxcInZhcnNcXFwiIGFzIHZhcnM7XFxuXFxuLmNlbnRlci1jb2x1bW4ge1xcbiAgbWF4LXdpZHRoOiB2YXJzLiRia3AtdGFibGV0O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUGllY2UsIHsgQmxhY2tQaWVjZSwgQ29sb3IsIE51bGxQaWVjZSwgUmVkUGllY2UgfSBmcm9tIFwiLi9waWVjZXNcIjtcblxuLyoqXG4gKiBCb2FyZCBjbGFzcyB3aGljaCBob2xkcyB0aGUgcGllY2VzIGFuZCB0cmFja3MgdGhlaXIgbW92ZW1lbnQuXG4gKiBJbml0aWFsaXplcyB3aXRoIHRoZSByZWQgcGllY2VzIG9uIHRoZSBmaXJzdCB0aHJlZSByb3dzIG9uIGRhcmsgdGlsZXMgYW5kXG4gKiB0aGUgYmxhY2sgcGllY2VzIG9uIHRoZSBsYXN0IHRocmVlIHJvd3Mgb24gZGFyayB0aWxlcy5cbiAqIFxuICogQGNhdGVnb3J5IEJvYXJkXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQm9hcmQgY2xhc3NcbiAqIGNvbnN0IGJvYXJkID0gbmV3IEJvYXJkKCk7XG4gKiBcbiAqIC8vIFdpbGwgQmUgYSByZWQgcGllY2VcbiAqIGNvbnN0IHJlZFBpZWNlID0gYm9hcmQucGllY2VBdCgwLCAxKTtcbiAqIFxuICogLy8gV2lsbCBiZSBhIGJsYWNrIHBpZWNlXG4gKiBjb25zdCBibGFja1BpZWNlID0gYm9hcmQucGllY2VBdCg3LCAwKTtcbiAqIFxuICogLy8gV2lsbCBiZSBlbXB0eVxuICogY29uc3QgaXNFbXB0eSA9IGJvYXJkLmlzRW1wdHkoNCwgNCk7XG4gKi9cbmNsYXNzIEJvYXJkIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBjb25zdGFudFxuICAgKiBAcHJvcGVydHkge251bWJlcn0gU0laRSAtICBUaGUgd2lkdGgvaGVpZ2h0IG9mIHRoZSBib2FyZCBpbiB0aWxlc1xuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IFNJWkU6IG51bWJlciA9IDg7XG4gIFxuICBwcml2YXRlIF9ib2FyZDogQXJyYXk8QXJyYXk8UGllY2U+PjtcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIFBvcHVsYXRlIHRoZSBib2FyZCBhcnJheSB3aXRoIHBpZWNlc1xuICAgIHRoaXMuX2JvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogQm9hcmQuU0laRSB9LCAoX2UsIGkpID0+XG4gICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBCb2FyZC5TSVpFIH0sIChfZiwgaikgPT4ge1xuICAgICAgICBpZiAoXy5pblJhbmdlKGksIDMsIEJvYXJkLlNJWkUgLSAzKSB8fCBpICUgMiAhPT0gaiAlIDIpIFxuICAgICAgICAgIHJldHVybiBuZXcgTnVsbFBpZWNlKCk7XG4gICAgICAgIC8vIEluIHRoZSBhcnJheSwgcm93IDAgaXMgdGhlIHRvcCBvZiB0aGUgYm9hcmRcbiAgICAgICAgZWxzZSBpZiAoaSA8IDMpXG4gICAgICAgICAgcmV0dXJuIG5ldyBCbGFja1BpZWNlKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gbmV3IFJlZFBpZWNlKCk7XG4gICAgICB9KSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB7QGxpbmsgUGllY2V9IGF0IHRoZSBnaXZlbiBjb29yZGluYXRlcy5cbiAgICogMCwwIGlzIGluIHRoZSBib3R0b20gbGVmdCBvZiB0aGUgYm9hcmQuXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gVGhlIHJvdyB0byBjaGVja1xuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gVGhlIGNvbHVtbiB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7UGllY2V9IFRoZSBwaWVjZSBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gQm90aCByb3cgYW5kIGNvbCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgQm9hcmQuU0laRSAtIDEgaW5jbHVzaXZlXG4gICAqL1xuICBwdWJsaWMgcGllY2VBdChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBQaWVjZSB7XG4gICAgaWYgKCFCb2FyZC5hcmVDb29yZHNWYWxpZChyb3csIGNvbCkpXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihCb2FyZC5jb29yZHNFcnJvck1zZyhyb3csIGNvbCkpO1xuXG4gICAgLy8gRmxpcCByb3cgdmFsdWVcbiAgICByb3cgPSBCb2FyZC5TSVpFIC0gcm93IC0gMTsgXG5cbiAgICByZXR1cm4gdGhpcy5fYm9hcmRbcm93XVtjb2xdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgdGlsZSBhdCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgaXMgZW1wdHkuXG4gICAqIDAsMCBpcyBpbiB0aGUgYm90dG9tIGxlZnQgb2YgdGhlIGJvYXJkLlxuICAgKiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFRoZSByb3cgdG8gY2hlY2tcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCAtIFRoZSBjb2x1bW4gdG8gY2hlY2tcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHRpbGUgYXQgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGlzIGVtcHR5XG4gICAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IEJvdGggcm93IGFuZCBjb2wgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIEJvYXJkLlNJWkUgLSAxIGluY2x1c2l2ZVxuICAgKi9cbiAgcHVibGljIGlzRW1wdHkocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGllY2VBdChyb3csIGNvbCkuY29sb3IgPT09IENvbG9yLk51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSByZWxldmFudCBIVE1MIGVsZW1lbnRzIGFuZCBhcHBlbmRzIHRoZW0gdG8gdGhlIHBhc3NlZCByb290XG4gICAqIGVsZW1lbnQuXG4gICAqIEFsc28gY2FsbHMgcmVuZGVyIG9uIHRoZSBwaWVjZXMuXG4gICAqIFxuICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSByb290RWxlIC0gIFRoZSByb290IGRpdiBjb250YWluaW5nIHRoZSBib2FyZFxuICAgKiBAcGFyYW0ge0JvYXJkUmVuZGVyT3B0c30gW29wdGlvbnM9e31dIC0gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBib2FyZCByZW5kZXJlclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmZsaXBwZWQ9ZmFsc2VdIC0gV2hldGhlciB0byByZW5kZXIgdGhlIGJvYXJkIGZsaXBwZWRcbiAgICogXG4gICAqIEBzZWUgQm9hcmRSZW5kZXJPcHRzXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKHJvb3RFbGU6IEhUTUxEaXZFbGVtZW50LCB7IGZsaXBwZWQ9ZmFsc2UgfTogQm9hcmRSZW5kZXJPcHRzPXt9KTogdm9pZCB7XG4gICAgbGV0IHJvdyA9IGZsaXBwZWQgPyAwIDogQm9hcmQuU0laRSAtIDE7XG4gICAgY29uc3Qgcm93SW5jID0gZmxpcHBlZCA/IDEgOiAtMTtcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgYm9hcmQgYXJyYXkgYW5kIGdlbmVyYXRlIHRoZSBhcHByb3ByaWF0ZSBodG1sXG4gICAgd2hpbGUgKF8uaW5SYW5nZShyb3csIDAsIEJvYXJkLlNJWkUpKSB7XG4gICAgICBsZXQgY29sID0gZmxpcHBlZCA/IEJvYXJkLlNJWkUgLSAxIDogMDtcbiAgICAgIGNvbnN0IGNvbEluYyA9IGZsaXBwZWQgPyAtMSA6IDE7XG5cbiAgICAgIHdoaWxlIChfLmluUmFuZ2UoY29sLCAwLCBCb2FyZC5TSVpFKSkge1xuICAgICAgICBjb25zdCB0aWxlRWxlID0gQm9hcmQuY3JlYXRlVGlsZShyb3csIGNvbCwgdGhpcy5pc0VtcHR5KHJvdywgY29sKSk7XG4gICAgICAgIHJvb3RFbGUuYXBwZW5kQ2hpbGQodGlsZUVsZSk7XG4gICAgICAgIFxuICAgICAgICBjb2wgKz0gY29sSW5jO1xuICAgICAgfVxuXG4gICAgICByb3cgKz0gcm93SW5jO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYXRlcyB0aGUgYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gIHByaXZhdGUgc3RhdGljIGNvb3Jkc0Vycm9yTXNnKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGByb3cgJyR7IHJvdyB9JyBhbmQgY29sICckeyBjb2wgfScgc2hvdWxkIGJlIGJldHdlZW4gMCBhbmQgJHsgQm9hcmQuU0laRSAtIDEgfSBpbmNsdXNpdmVgO1xuICB9XG5cbiAgLy8gUmV0dXJucyB3aGV0aGVyIHRoZSBnaXZlbiBjb29yZGluYXRlcyBhcmUgdmFsaWRcbiAgcHJpdmF0ZSBzdGF0aWMgYXJlQ29vcmRzVmFsaWQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaW5SYW5nZShyb3csIDAsIEJvYXJkLlNJWkUpICYmIF8uaW5SYW5nZShjb2wsIDAsIEJvYXJkLlNJWkUpO1xuICB9XG5cbiAgLy8gQ3JlYXRlcyB0aGUgaHRtbCBmb3IgYSB0aWxlIGVsZW1lbnRcbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlVGlsZShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGVtcHR5OiBib29sZWFuKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IHRpbGVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdGlsZUVsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICBpZiAoZW1wdHkpIHRpbGVFbGUuY2xhc3NMaXN0LmFkZChcImVtcHR5XCIpO1xuICAgIHRpbGVFbGUuY2xhc3NMaXN0LmFkZCgocm93ICUgMiA9PT0gY29sICUgMikgPyBcInJlZFwiIDogXCJibGFja1wiKTtcbiAgICBcbiAgICB0aWxlRWxlLmRhdGFzZXQucm93ID0gcm93LnRvU3RyaW5nKCk7XG4gICAgdGlsZUVsZS5kYXRhc2V0LmNvbCA9IGNvbC50b1N0cmluZygpO1xuICAgIFxuICAgIHJldHVybiB0aWxlRWxlO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9ucyB0aGF0IGNoYW5nZSBob3cgdGhlIGJvYXJkIGlzIHJlbmRlcmVkXG4gKiBcbiAqIEBjYXRlZ29yeSBCb2FyZFxuICogQHNlZSBCb2FyZFxuICovXG5pbnRlcmZhY2UgQm9hcmRSZW5kZXJPcHRzIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBib2FyZCBmbGlwcGVkXG4gICAqL1xuICBmbGlwcGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IFBpZWNlIGZyb20gXCIuL1BpZWNlXCI7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJsYWNrIHBpZWNlIG9uIHRoZSB7QGxpbmsgQm9hcmR9LlxuICogXG4gKiBAY2F0ZWdvcnkgUGllY2VzXG4gKiBAZXh0ZW5kcyBQaWVjZVxuICovXG5jbGFzcyBCbGFja1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgYSBibGFjayBwaWVjZSBpcyBhbHdheXMge0BsaW5rIENvbG9yfS5CbGFjay5cbiAgICogXG4gICAqIEByZWFkb25seVxuICAgKiBAcHJvcGVydHkge0NvbG9yfSBjb2xvciAgLSBBbHdheXMge0BsaW5rIENvbG9yfS5CbGFja1xuICAgKi9cbiAgcmVhZG9ubHkgY29sb3I6IENvbG9yO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb2xvciA9IENvbG9yLkJsYWNrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsYWNrUGllY2U7XG4iLCIvKipcbiAqIEVudW0gZm9yIHRoZSBwb3NzaWJsZSBwaWVjZSBjb2xvcnMuXG4gKiBIYXMgbm8gcmVmbGVjdGlvbiBvbiB0aGUgYWN0dWFsIGFwcGVhcmFuY2Ugb2YgdGhlIHBpZWNlcy5cbiAqIFxuICogQGNhdGVnb3J5IFBpZWNlc1xuICogQHR5cGUge2VudW19XG4gKiBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDb2xvci5OdWxsICAtIFVzZWQgYnkgdGhlIHtAbGluayBOdWxsUGllY2V9XG4gKiBAcHJvcGVydHkge251bWJlcn0gQ29sb3IuQmxhY2sgLSBDb2xvciBmb3IgdGhlIGJsYWNrIHBpZWNlc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IENvbG9yLlJlZCAgIC0gQ29sb3IgZm9yIHRoZSByZWQgcGllY2VzXG4gKi9cbmVudW0gQ29sb3Ige1xuICBOdWxsLFxuICBCbGFjayxcbiAgUmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQgUGllY2UgZnJvbSBcIi4vUGllY2VcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGVtcHR5IHNxdWFyZSBvbiB0aGUge0BsaW5rIEJvYXJkfS5cbiAqIFxuICogQGNhdGVnb3J5IFBpZWNlc1xuICogQGV4dGVuZHMgUGllY2VcbiAqL1xuY2xhc3MgTnVsbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuXG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHByb3BlcnR5IHtDb2xvcn0gY29sb3IgLSAgVGhlIGNvbG9yIG9mIHRoZSBOdWxsUGllY2UgaXMgYWx3YXlzIHtAbGluayBDb2xvcn0uTnVsbC5cbiAgICovXG4gIHJlYWRvbmx5IGNvbG9yOiBDb2xvcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sb3IgPSBDb2xvci5OdWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGlzS2luZyBwcm9wZXJ0eS4gQWx3YXlzIHJldHVybnMgZmFsc2UsIHNpbmNlIGEgTnVsbFBpZWNlXG4gICAqIGNhbm5vdCBiZSBhIFwia2luZy5cIlxuICAgKiBcbiAgICogQHJlYWRvbmx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzS2luZyAtIEFsd2F5cyBmYWxzZVxuICAgKi9cbiAgZ2V0IGlzS2luZygpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAvKipcbiAgICogTWV0aG9kIHN0dWIgaW1wbGVtZW50ZWQgZm9yIHRoZSB7QGxpbmsgUGllY2V9IGludGVyZmFjZS5cbiAgICogRG9lcyBub3RoaW5nLCBzaW5jZSBhIE51bGxQaWVjZSBjYW5ub3QgcHJvbW90ZS5cbiAgICovXG4gIHB1YmxpYyBwcm9tb3RlKCk6IHZvaWQgeyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVsbFBpZWNlO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgYmFzZSBjbGFzcyBvZiBhIGNoZWNrZXJzIHBpZWNlLlxuICogXG4gKiBAYWJzdHJhY3RcbiAqIEBjYXRlZ29yeSBQaWVjZXNcbiAqIFxuICogQG1lcm1haWRcbiAqIGNsYXNzRGlhZ3JhbVxuICogIFBpZWNlIDx8LS0gTnVsbFBpZWNlIDogZXh0ZW5kc1xuICogIFBpZWNlIDx8LS0gQmxhY2tQaWVjZSA6IGV4dGVuZHNcbiAqICBQaWVjZSA8fC0tIFJlZFBpZWNlIDogZXh0ZW5kc1xuICogIFBpZWNlOiArQ29sb3IgY29sb3IqXG4gKiAgUGllY2U6ICtib29sZWFuIGlzS2luZ1xuICogIFBpZWNlOiAhYm9vbGVhbiBfaXNLaW5nXG4gKiAgUGllY2U6ICtwcm9tb3RlKClcbiAqICBOdWxsUGllY2U6ICtDb2xvciBjb2xvclxuICogIE51bGxQaWVjZTogK2Jvb2xlYW4gaXNLaW5nXG4gKiAgTnVsbFBpZWNlOiArcHJvbW90ZSgpXG4gKiAgQmxhY2tQaWVjZTogK0NvbG9yIGNvbG9yXG4gKiAgUmVkUGllY2U6ICtDb2xvciBjb2xvclxuICovXG5hYnN0cmFjdCBjbGFzcyBQaWVjZSB7XG5cbiAgLyoqXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmVhZG9ubHlcbiAgICogQHByb3BlcnR5IHtDb2xvcn0gY29sb3IgIC0gVGhlIHtAbGluayBDb2xvcn0gb2YgdGhlIHBpZWNlXG4gICAqL1xuICBhYnN0cmFjdCByZWFkb25seSBjb2xvcjogQ29sb3I7XG4gIFxuICBwcm90ZWN0ZWQgX2lzS2luZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pc0tpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNLaW5nIC0gV2hldGhlciB0aGlzIHBpZWNlIGlzIGEga2luZ1xuICAgKi9cbiAgZ2V0IGlzS2luZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNLaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21vdGVzIHRoZSBwaWVjZSBpbnRvIGEgS2luZywgaWYgYXBwbGljYWJsZS5cbiAgICogXG4gICAqIEBzZWUgTnVsbFBpZWNlXG4gICAqL1xuICBwdWJsaWMgcHJvbW90ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc0tpbmcgPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpZWNlO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQgUGllY2UgZnJvbSBcIi4vUGllY2VcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVkIHBpZWNlIG9uIHRoZSB7QGxpbmsgQm9hcmR9LlxuICogXG4gKiBAY2F0ZWdvcnkgUGllY2VzXG4gKiBAZXh0ZW5kcyBQaWVjZVxuICovXG5jbGFzcyBSZWRQaWVjZSBleHRlbmRzIFBpZWNlIHtcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIGEgcmVkIHBpZWNlIGlzIGFsd2F5cyB7QGxpbmsgQ29sb3J9LlJlZC5cbiAgICogXG4gICAqIEByZWFkb25seVxuICAgKiBAcHJvcGVydHkge0NvbG9yfSBjb2xvciAgLSBBbHdheXMge0BsaW5rIENvbG9yfS5SZWRcbiAgICovXG4gIHJlYWRvbmx5IGNvbG9yOiBDb2xvcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29sb3IgPSBDb2xvci5SZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVkUGllY2U7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vUGllY2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmxhY2tQaWVjZSB9IGZyb20gXCIuL0JsYWNrUGllY2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOdWxsUGllY2UgfSBmcm9tIFwiLi9OdWxsUGllY2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVkUGllY2UgfSBmcm9tIFwiLi9SZWRQaWVjZVwiO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlL2luZGV4LnNjc3NcIjtcblxuY29uc3QgYm9hcmRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2JvYXJkXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoKTtcblxuYm9hcmQucmVuZGVyKGJvYXJkRWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=