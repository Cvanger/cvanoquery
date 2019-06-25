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
var AbstractDDL_1 = require("src/ddl/AbstractDDL");
var EnumDDL = /** @class */ (function (_super) {
    __extends(EnumDDL, _super);
    function EnumDDL(enums) {
        var _this = _super.call(this) || this;
        _this.enums = enums;
        return _this;
    }
    EnumDDL.prototype.getDDL = function (key) {
        return _super.prototype.getDDL.call(this, key, "enum(" + this.enums.map(function (e) { return "'" + e + "'"; }).join(', ') + ")");
    };
    return EnumDDL;
}(AbstractDDL_1.AbstractDDL));
function enumField(enums) {
    return new EnumDDL(enums);
}
exports.enumField = enumField;
