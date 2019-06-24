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
var AbstractOperator_1 = require("./AbstractOperator");
var EqualOperator = /** @class */ (function (_super) {
    __extends(EqualOperator, _super);
    function EqualOperator(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        return _this;
    }
    EqualOperator.prototype.getWhere = function () {
        return "= " + this.stringify([this.item]);
    };
    return EqualOperator;
}(AbstractOperator_1.AbstractOperator));
function Equal(value) {
    return new EqualOperator(value);
}
exports.Equal = Equal;
