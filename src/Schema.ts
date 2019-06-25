import { AbstractDDL } from 'src/ddl/AbstractDDL';

export type IColumns<T> = { [P in keyof T]?: AbstractDDL };

export function createTable<T>(tableName: string, columns: IColumns<T>) {
    const c = [];
    Object.keys(columns).forEach(key => {
        c.push(...(columns[key]).getDDL(key));
    });

    return `CREATE TABLE \`${tableName}\` (${c.join(', ')});`;
}

export function dropTable(tableName: string) {
    return `DROP TABLE \`${tableName}\`;`;
}
