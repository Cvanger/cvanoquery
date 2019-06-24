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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Table_1 = require("src/Table");
var operator_1 = require("src/operator");
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var TestTable = /** @class */ (function (_super) {
    __extends(TestTable, _super);
    function TestTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tableName = 'test';
        return _this;
    }
    return TestTable;
}(Table_1.Table));
describe('Table', function () {
    it('should generate simple select', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable.select().getFindQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('SELECT `*` FROM `test`;');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate select with columns', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable.select(['name']).getFindQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('SELECT `name` FROM `test`;');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate in select', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable.select(['name']).where({ name: operator_1.In(['a', 'b']) }).getFindQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('SELECT `name` FROM `test` WHERE `name` IN ("a", "b");');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate equal select', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .select(['name'])
                            .where({
                            name: operator_1.Equal('b')
                        })
                            .getFindQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('SELECT `name` FROM `test` WHERE `name` = "b";');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate mixed where', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .select(['name'])
                            .where({
                            name: operator_1.Equal('b'),
                            pass: operator_1.In([1, 2])
                        })
                            .getFindQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('SELECT `name` FROM `test` WHERE `name` = "b" AND `pass` IN (1, 2);');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate simple update', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .getUpdateQuery({ name: 'a' })];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('UPDATE `test` SET `name` = "a";');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate update with where', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .where({ name: operator_1.Equal('b') })
                            .getUpdateQuery({ name: 'a' })];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('UPDATE `test` SET `name` = "a" WHERE `name` = "b";');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate simple delete', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .where({ name: operator_1.Equal('b') })
                            .getDeleteQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('DELETE FROM `test` WHERE `name` = "b";');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate complex delete', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .where({ name: operator_1.Equal('b'), pass: operator_1.In([2, 3]) })
                            .getDeleteQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('DELETE FROM `test` WHERE `name` = "b" AND `pass` IN (2, 3);');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate simple insert', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .getInsertQuery([{ name: 'asd', pass: 'secret' }])];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('INSERT INTO `test` (`name`, `pass`) VALUES ("asd", "secret");');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate multi insert', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .getInsertQuery([{ name: 'asd', pass: 'secret' }, { name: 'asd2', pass: 'secret2' }])];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('INSERT INTO `test` (`name`, `pass`) VALUES ("asd", "secret"), ("asd2", "secret2");');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should generate limit', function () { return __awaiter(_this, void 0, void 0, function () {
        var testTable, query;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testTable = new TestTable();
                    return [4 /*yield*/, testTable
                            .where({ name: operator_1.Equal('asd') })
                            .limit(1)
                            .getFindQuery()];
                case 1:
                    query = _a.sent();
                    expect(query).toEqual('SELECT `*` FROM `test` WHERE `name` = "asd" LIMIT 1;');
                    return [2 /*return*/];
            }
        });
    }); });
});
