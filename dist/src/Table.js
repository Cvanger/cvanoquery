"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Table = /** @class */ (function () {
    function Table() {
        this.tableName = '';
        this.columns = ['*'];
        this.whereCondition = {};
        this.log = true;
    }
    Table.prototype.select = function (columns) {
        if (columns === void 0) { columns = ['*']; }
        this.columns = columns;
        return this;
    };
    Table.prototype.where = function (where) {
        this.whereCondition = where;
        return this;
    };
    Table.prototype.limit = function (limit) {
        this.resultLimit = limit;
        return this;
    };
    Table.prototype.getFindQuery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var c, query, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        c = this.columns.map(function (column) { return "`" + column + "`"; });
                        _a = "SELECT " + c.join(", ") + " FROM `";
                        return [4 /*yield*/, this.getTableName()];
                    case 1:
                        query = _a + (_b.sent()) + "`";
                        query += this.getWhereQuery();
                        query += this.getLimitQuery();
                        query += ";";
                        return [2 /*return*/, query];
                }
            });
        });
    };
    Table.prototype.getUpdateQuery = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            var s, query, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        s = Object.keys(values).map(function (key) {
                            return "`" + key + "` = \"" + values[key] + "\"";
                        });
                        _a = "UPDATE `";
                        return [4 /*yield*/, this.getTableName()];
                    case 1:
                        query = _a + (_b.sent()) + "` SET " + s.join(', ');
                        query += this.getWhereQuery();
                        query += ";";
                        return [2 /*return*/, query];
                }
            });
        });
    };
    Table.prototype.getDeleteQuery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "DELETE FROM `";
                        return [4 /*yield*/, this.getTableName()];
                    case 1:
                        query = _a + (_b.sent()) + "`";
                        query += this.getWhereQuery();
                        query += ";";
                        return [2 /*return*/, query];
                }
            });
        });
    };
    Table.prototype.getInsertQuery = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, valuesArray, c, query, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        columns = [];
                        valuesArray = [];
                        values.forEach(function (value) {
                            var values = [];
                            Object.keys(value)
                                .forEach(function (key) {
                                if (!columns.includes(key)) {
                                    columns.push(key);
                                }
                                values.push("\"" + value[key] + "\"");
                            });
                            valuesArray.push("(" + values.join(', ') + ")");
                        });
                        c = columns.map(function (column) { return "`" + column + "`"; }).join(', ');
                        _a = "INSERT INTO `";
                        return [4 /*yield*/, this.getTableName()];
                    case 1:
                        query = _a + (_b.sent()) + "` (" + c + ") VALUES " + valuesArray.join(', ');
                        query += this.getWhereQuery();
                        query += ";";
                        return [2 /*return*/, query];
                }
            });
        });
    };
    Table.prototype.find = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFindQuery()];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, this.query(query)];
                }
            });
        });
    };
    Table.prototype.findOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFindQuery()];
                    case 1:
                        query = _a.sent();
                        return [4 /*yield*/, this.query(query)];
                    case 2:
                        rows = _a.sent();
                        return [2 /*return*/, rows[0]];
                }
            });
        });
    };
    Table.prototype.findOneOrFail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.limit(1);
                        return [4 /*yield*/, this.getFindQuery()];
                    case 1:
                        query = _a.sent();
                        return [4 /*yield*/, this.query(query)];
                    case 2:
                        rows = _a.sent();
                        if (rows.length !== 1) {
                            throw new Error("Not just one result found (" + query + "): " + rows.length);
                        }
                        return [2 /*return*/, rows[0]];
                }
            });
        });
    };
    Table.prototype.update = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUpdateQuery(values)];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, this.query(query)];
                }
            });
        });
    };
    Table.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeleteQuery()];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, this.query(query)];
                }
            });
        });
    };
    Table.prototype.insert = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInsertQuery(values)];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, this.query(query)];
                }
            });
        });
    };
    Table.prototype.query = function (sql) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.pool) {
                            throw new Error('No pool defined');
                        }
                        _this.pool.query(sql, function (err, results) {
                            if (err) {
                                throw err;
                            }
                            resolve(results);
                        });
                    })];
            });
        });
    };
    Table.prototype.getPrefix = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ''];
            });
        });
    };
    Table.prototype.getTableName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "";
                        return [4 /*yield*/, this.getPrefix()];
                    case 1: return [2 /*return*/, _a + (_b.sent()) + this.tableName];
                }
            });
        });
    };
    Table.prototype.getWhereQuery = function () {
        var _this = this;
        var w = Object.keys(this.whereCondition).map(function (key) {
            return "`" + key + "` " + (_this.whereCondition[key]).getWhere();
        });
        if (w.length > 0) {
            return " WHERE " + w.join(" AND ");
        }
        return '';
    };
    Table.prototype.getLimitQuery = function () {
        if (this.resultLimit) {
            return " LIMIT " + this.resultLimit;
        }
        return '';
    };
    return Table;
}());
exports.Table = Table;
