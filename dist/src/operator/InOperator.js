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
var InOperator = /** @class */ (function (_super) {
    __extends(InOperator, _super);
    function InOperator(items) {
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    InOperator.prototype.getWhere = function () {
        return "IN (" + this.stringify(this.items).join(", ") + ")";
    };
    return InOperator;
}(AbstractOperator_1.AbstractOperator));
function In(items) {
    return new InOperator(items);
}
exports.In = In;
