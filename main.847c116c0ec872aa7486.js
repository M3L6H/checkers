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
class Board {
    constructor() {
        this._board = Array.from({ length: Board.SIZE }, (_e, i) => Array.from({ length: Board.SIZE }, (_f, j) => {
            if (lodash_1.default.inRange(i, 3, Board.SIZE - 3) || i % 2 !== j % 2)
                return new pieces_1.NullPiece();
            else if (i < 3)
                return new pieces_1.BlackPiece();
            else
                return new pieces_1.RedPiece();
        }));
    }
    pieceAt(row, col) {
        if (!Board.areCoordsValid(row, col))
            throw new RangeError(Board.coordsErrorMsg(row, col));
        // Flip row value
        row = Board.SIZE - row - 1;
        return this._board[row][col];
    }
    isEmpty(row, col) {
        return this.pieceAt(row, col).color === pieces_1.Color.Null;
    }
    render(rootEle, { flipped = false } = {}) {
        let row = flipped ? 0 : Board.SIZE - 1;
        const rowInc = flipped ? 1 : -1;
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
    static coordsErrorMsg(row, col) {
        return `row '${row}' and col '${col}' should be between 0 and ${Board.SIZE - 1} inclusive`;
    }
    static areCoordsValid(row, col) {
        return lodash_1.default.inRange(row, 0, Board.SIZE) && lodash_1.default.inRange(col, 0, Board.SIZE);
    }
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
class BlackPiece {
    constructor() {
        this.color = Color_1.default.Black;
        this._isKing = false;
    }
    get isKing() {
        return this._isKing;
    }
    promote() {
        this._isKing = true;
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
class NullPiece {
    constructor() {
        this.color = Color_1.default.Null;
        this._isKing = false;
    }
    get isKing() {
        return this._isKing;
    }
    promote() {
        this._isKing = false;
    }
}
exports.default = NullPiece;


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
class RedPiece {
    constructor() {
        this.color = Color_1.default.Red;
        this._isKing = false;
    }
    get isKing() {
        return this._isKing;
    }
    promote() {
        this._isKing = true;
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
exports.RedPiece = exports.NullPiece = exports.Color = exports.BlackPiece = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja2Vycy8uL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zdHlsZS9pbmRleC5zY3NzPzAzNjMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvQm9hcmQudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvcGllY2VzL0JsYWNrUGllY2UudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvcGllY2VzL0NvbG9yLnRzIiwid2VicGFjazovL2NoZWNrZXJzLy4vc3JjL3BpZWNlcy9OdWxsUGllY2UudHMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zcmMvcGllY2VzL1JlZFBpZWNlLnRzIiwid2VicGFjazovL2NoZWNrZXJzLy4vc3JjL3BpZWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL3NyYy9zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnTEFBZ0wsY0FBYyxlQUFlLDJCQUEyQiw0QkFBNEIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLHVCQUF1QiwyQ0FBMkMsa0JBQWtCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxPQUFPLCtCQUErQixvQkFBb0IsR0FBRyxXQUFXLDRCQUE0QixHQUFHLHNCQUFzQixnQkFBZ0Isc0JBQXNCLHVCQUF1QixHQUFHLDJCQUEyQix1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxrQkFBa0IsMENBQTBDLEdBQUcsdUNBQXVDLDhCQUE4QixHQUFHLHFDQUFxQyw4QkFBOEIsR0FBRyxvQkFBb0IscUJBQXFCLG1CQUFtQixrQkFBa0Isd0JBQXdCLEdBQUcsT0FBTyxxTkFBcU4sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1B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RUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ4QixnRUFBcUQ7QUFBNUMsaUlBQU8sUUFBYztBQUM5QixzREFBMkM7QUFBbEMsdUhBQU8sUUFBUztBQUN6Qiw4REFBbUQ7QUFBMUMsK0hBQU8sUUFBYTtBQUM3Qiw0REFBaUQ7QUFBeEMsNkhBQU8sUUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNUIseUVBQTRCO0FBRTVCLG9EQUE2QjtBQUU3QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBbUIsQ0FBQztBQUN2RSxNQUFNLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO0FBRTFCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi44NDdjMTE2YzBlYzg3MmFhNzQ4Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcXG5kaXYsIHNlY3Rpb24sIHNwYW4sIG1haW4sIGJvZHksXFxuZm9ybSwgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsXFxuaW1nLCBwLCBhLCBibG9ja3F1b3RlLCBwcmUsXFxub2wsIHVsLCBsaSwgaSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5hOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCAudGlsZS5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCAudGlsZS5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzNWY1ZjtcXG59XFxuXFxuLmNlbnRlci1jb2x1bW4ge1xcbiAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZS9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zdHlsZS9fYm9hcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3R5bGUvX3ZhcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3R5bGUvX3BhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7RUFLRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBRUEsY0FBQTtFQUVBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FER0U7RUFDRSx1QkFBQTtBQ0RKOztBQzFCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FENkJGO0FDM0JFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsYUFBQTtFQUNBLHFDQUFBO0FENEJKO0FDekJNO0VBQ0UseUJDZkE7QUYwQ1I7QUN4Qk07RUFDRSx5QkNsQkY7QUY0Q047O0FHL0NBO0VBQ0UsZ0JERlc7RUNHWCxjQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FIaURGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXFxuZGl2LCBzZWN0aW9uLCBzcGFuLCBtYWluLCBib2R5LFxcbmZvcm0sIGlucHV0LCBidXR0b24sIHRleHRhcmVhLFxcbmltZywgcCwgYSwgYmxvY2txdW90ZSwgcHJlLFxcbm9sLCB1bCwgbGksIGkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGNvbG9yOiBpbmhlcml0O1xcblxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG4gIH1cXG59XFxuXCIsXCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxcbmRpdiwgc2VjdGlvbiwgc3BhbiwgbWFpbiwgYm9keSxcXG5mb3JtLCBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSxcXG5pbWcsIHAsIGEsIGJsb2NrcXVvdGUsIHByZSxcXG5vbCwgdWwsIGxpLCBpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmE6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciAuYm9hcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIC50aWxlLmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMGY7XFxufVxcbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIC50aWxlLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1ZjVmO1xcbn1cXG5cXG4uY2VudGVyLWNvbHVtbiB7XFxuICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsXCJAdXNlIFxcXCJ2YXJzXFxcIiBhcyB2YXJzO1xcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIFxcbiAgICAudGlsZSB7XFxuICAgICAgJi5ibGFjayB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJzLiRibGFjaztcXG4gICAgICB9XFxuICBcXG4gICAgICAmLnJlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJzLiRyZWQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy8gQnJlYWtwb2ludHNcXG4kYmtwLXRhYmxldDogNzY4cHg7XFxuXFxuLy8gQ29sb3JzXFxuJGJsYWNrOiAjMGYwZjBmICFkZWZhdWx0O1xcbiRyZWQ6ICNkMzVmNWYgIWRlZmF1bHQ7XFxuXCIsXCJAdXNlIFxcXCJ2YXJzXFxcIiBhcyB2YXJzO1xcblxcbi5jZW50ZXItY29sdW1uIHtcXG4gIG1heC13aWR0aDogdmFycy4kYmtwLXRhYmxldDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFBpZWNlLCB7IEJsYWNrUGllY2UsIENvbG9yLCBOdWxsUGllY2UsIFJlZFBpZWNlIH0gZnJvbSBcIi4vcGllY2VzXCI7XG5cbmNsYXNzIEJvYXJkIHtcbiAgc3RhdGljIHJlYWRvbmx5IFNJWkUgPSA4O1xuICBcbiAgcHJpdmF0ZSBfYm9hcmQ6IEFycmF5PEFycmF5PFBpZWNlPj47XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9ib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IEJvYXJkLlNJWkUgfSwgKF9lLCBpKSA9PlxuICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogQm9hcmQuU0laRSB9LCAoX2YsIGopID0+IHtcbiAgICAgICAgaWYgKF8uaW5SYW5nZShpLCAzLCBCb2FyZC5TSVpFIC0gMykgfHwgaSAlIDIgIT09IGogJSAyKSBcbiAgICAgICAgICByZXR1cm4gbmV3IE51bGxQaWVjZSgpO1xuICAgICAgICBlbHNlIGlmIChpIDwgMylcbiAgICAgICAgICByZXR1cm4gbmV3IEJsYWNrUGllY2UoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBuZXcgUmVkUGllY2UoKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHBpZWNlQXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUGllY2Uge1xuICAgIGlmICghQm9hcmQuYXJlQ29vcmRzVmFsaWQocm93LCBjb2wpKVxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoQm9hcmQuY29vcmRzRXJyb3JNc2cocm93LCBjb2wpKTtcblxuICAgIC8vIEZsaXAgcm93IHZhbHVlXG4gICAgcm93ID0gQm9hcmQuU0laRSAtIHJvdyAtIDE7IFxuXG4gICAgcmV0dXJuIHRoaXMuX2JvYXJkW3Jvd11bY29sXTtcbiAgfVxuXG4gIGlzRW1wdHkocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGllY2VBdChyb3csIGNvbCkuY29sb3IgPT09IENvbG9yLk51bGw7XG4gIH1cblxuICByZW5kZXIocm9vdEVsZTogSFRNTERpdkVsZW1lbnQsIHsgZmxpcHBlZD1mYWxzZSB9OiBSZW5kZXJPcHRzPXt9KTogdm9pZCB7XG4gICAgbGV0IHJvdyA9IGZsaXBwZWQgPyAwIDogQm9hcmQuU0laRSAtIDE7XG4gICAgY29uc3Qgcm93SW5jID0gZmxpcHBlZCA/IDEgOiAtMTtcblxuICAgIHdoaWxlIChfLmluUmFuZ2Uocm93LCAwLCBCb2FyZC5TSVpFKSkge1xuICAgICAgbGV0IGNvbCA9IGZsaXBwZWQgPyBCb2FyZC5TSVpFIC0gMSA6IDA7XG4gICAgICBjb25zdCBjb2xJbmMgPSBmbGlwcGVkID8gLTEgOiAxO1xuXG4gICAgICB3aGlsZSAoXy5pblJhbmdlKGNvbCwgMCwgQm9hcmQuU0laRSkpIHtcbiAgICAgICAgY29uc3QgdGlsZUVsZSA9IEJvYXJkLmNyZWF0ZVRpbGUocm93LCBjb2wsIHRoaXMuaXNFbXB0eShyb3csIGNvbCkpO1xuICAgICAgICByb290RWxlLmFwcGVuZENoaWxkKHRpbGVFbGUpO1xuICAgICAgICBcbiAgICAgICAgY29sICs9IGNvbEluYztcbiAgICAgIH1cblxuICAgICAgcm93ICs9IHJvd0luYztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjb29yZHNFcnJvck1zZyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgcm93ICckeyByb3cgfScgYW5kIGNvbCAnJHsgY29sIH0nIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kICR7IEJvYXJkLlNJWkUgLSAxIH0gaW5jbHVzaXZlYDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFyZUNvb3Jkc1ZhbGlkKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBfLmluUmFuZ2Uocm93LCAwLCBCb2FyZC5TSVpFKSAmJiBfLmluUmFuZ2UoY29sLCAwLCBCb2FyZC5TSVpFKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZVRpbGUocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBlbXB0eTogYm9vbGVhbik6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB0aWxlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRpbGVFbGUuY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG4gICAgaWYgKGVtcHR5KSB0aWxlRWxlLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcbiAgICB0aWxlRWxlLmNsYXNzTGlzdC5hZGQoKHJvdyAlIDIgPT09IGNvbCAlIDIpID8gXCJyZWRcIiA6IFwiYmxhY2tcIik7XG4gICAgXG4gICAgdGlsZUVsZS5kYXRhc2V0LnJvdyA9IHJvdy50b1N0cmluZygpO1xuICAgIHRpbGVFbGUuZGF0YXNldC5jb2wgPSBjb2wudG9TdHJpbmcoKTtcbiAgICBcbiAgICByZXR1cm4gdGlsZUVsZTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUmVuZGVyT3B0cyB7XG4gIGZsaXBwZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQgUGllY2UgZnJvbSBcIi4vUGllY2VcIjtcblxuY2xhc3MgQmxhY2tQaWVjZSBpbXBsZW1lbnRzIFBpZWNlIHtcbiAgcmVhZG9ubHkgY29sb3I6IENvbG9yO1xuXG4gIHByaXZhdGUgX2lzS2luZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbG9yID0gQ29sb3IuQmxhY2s7XG4gICAgdGhpcy5faXNLaW5nID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNLaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0tpbmc7XG4gIH1cblxuICBwcm9tb3RlKCk6IHZvaWQge1xuICAgIHRoaXMuX2lzS2luZyA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxhY2tQaWVjZTtcbiIsImVudW0gQ29sb3Ige1xuICBOdWxsLFxuICBCbGFjayxcbiAgUmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQgUGllY2UgZnJvbSBcIi4vUGllY2VcIjtcblxuY2xhc3MgTnVsbFBpZWNlIGltcGxlbWVudHMgUGllY2Uge1xuICByZWFkb25seSBjb2xvcjogQ29sb3I7XG5cbiAgcHJpdmF0ZSBfaXNLaW5nOiBib29sZWFuO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb2xvciA9IENvbG9yLk51bGw7XG4gICAgdGhpcy5faXNLaW5nID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNLaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0tpbmc7XG4gIH1cblxuICBwcm9tb3RlKCk6IHZvaWQge1xuICAgIHRoaXMuX2lzS2luZyA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxQaWVjZTtcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IFBpZWNlIGZyb20gXCIuL1BpZWNlXCI7XG5cbmNsYXNzIFJlZFBpZWNlIGltcGxlbWVudHMgUGllY2Uge1xuICByZWFkb25seSBjb2xvcjogQ29sb3I7XG5cbiAgcHJpdmF0ZSBfaXNLaW5nOiBib29sZWFuO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb2xvciA9IENvbG9yLlJlZDtcbiAgICB0aGlzLl9pc0tpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0tpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzS2luZztcbiAgfVxuXG4gIHByb21vdGUoKTogdm9pZCB7XG4gICAgdGhpcy5faXNLaW5nID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWRQaWVjZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9QaWVjZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCbGFja1BpZWNlIH0gZnJvbSBcIi4vQmxhY2tQaWVjZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE51bGxQaWVjZSB9IGZyb20gXCIuL051bGxQaWVjZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWRQaWVjZSB9IGZyb20gXCIuL1JlZFBpZWNlXCI7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vQm9hcmRcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGUvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBib2FyZEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjYm9hcmRcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBib2FyZCA9IG5ldyBCb2FyZCgpO1xuXG5ib2FyZC5yZW5kZXIoYm9hcmRFbGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==