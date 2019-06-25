"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractDDL = /** @class */ (function () {
    function AbstractDDL() {
    }
    AbstractDDL.prototype.getDDL = function (key, ddl) {
        var finalDDL = "`" + key + "` " + ddl;
        if (this.isNotNull) {
            finalDDL += ' NOT NULL';
        }
        return [finalDDL];
    };
    ;
    AbstractDDL.prototype.notNull = function () {
        this.isNotNull = true;
        return this;
    };
    return AbstractDDL;
}());
exports.AbstractDDL = AbstractDDL;
