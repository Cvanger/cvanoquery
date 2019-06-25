import { AbstractDDL } from 'src/ddl/AbstractDDL';
export declare type IColumns<T> = {
    [P in keyof T]?: AbstractDDL;
};
export declare function createTable<T>(tableName: string, columns: IColumns<T>): string;
export declare function dropTable(tableName: string): string;
