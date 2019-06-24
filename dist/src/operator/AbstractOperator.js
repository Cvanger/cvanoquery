"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractOperator = /** @class */ (function () {
    function AbstractOperator() {
    }
    AbstractOperator.prototype.stringify = function (items) {
        return items.map(function (item) {
            var type = typeof item;
            switch (type) {
                case "string":
                    return "\"" + item + "\"";
                case "number":
                    return String(item);
                default:
                    throw new Error("Unhandled type of equal item: " + type);
            }
        });
    };
    return AbstractOperator;
}());
exports.AbstractOperator = AbstractOperator;
