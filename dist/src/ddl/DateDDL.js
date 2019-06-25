"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractDDL_1 = require("./AbstractDDL");
var DateDDL = /** @class */ (function (_super) {
    __extends(DateDDL, _super);
    function DateDDL() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateDDL.prototype.getDDL = function (key) {
        return _super.prototype.getDDL.call(this, key, "date");
    };
    return DateDDL;
}(AbstractDDL_1.AbstractDDL));
function date() {
    return new DateDDL();
}
exports.date = date;
