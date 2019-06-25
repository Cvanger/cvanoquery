"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTable(tableName, columns) {
    var c = [];
    Object.keys(columns).forEach(function (key) {
        c.push.apply(c, (columns[key]).getDDL(key));
    });
    return "CREATE TABLE `" + tableName + "` (" + c.join(', ') + ");";
}
exports.createTable = createTable;
function dropTable(tableName) {
    return "DROP TABLE `" + tableName + "`;";
}
exports.dropTable = dropTable;
