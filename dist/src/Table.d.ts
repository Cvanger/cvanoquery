import { Pool } from 'mysql';
import { AbstractOperator } from 'src/operator';
declare type IWhere<T> = {
    [P in keyof T]?: AbstractOperator;
};
declare type IValues<T> = {
    [P in keyof T]?: string | number;
};
declare type IInsert<T> = {
    [P in keyof T]?: string | number;
};
export declare class Table<T> {
    protected tableName: string;
    private columns;
    private whereCondition;
    protected log: boolean;
    protected pool?: Pool;
    private resultLimit?;
    setPool(pool: Pool): void;
    select(columns?: string[]): this;
    where(where: IWhere<T>): this;
    limit(limit: number): this;
    getFindQuery(): Promise<string>;
    getUpdateQuery(values: IValues<T>): Promise<string>;
    getDeleteQuery(): Promise<string>;
    getInsertQuery(values: Array<IInsert<T>>): Promise<string>;
    find(): Promise<T[]>;
    findOne(): Promise<T>;
    findOneOrFail(): Promise<T>;
    update(values: IValues<T>): Promise<T[]>;
    delete(): Promise<T[]>;
    insert(values: Array<IInsert<T>>): Promise<T[]>;
    query<S>(sql: string): Promise<S[]>;
    protected getPrefix(): Promise<string>;
    private getTableName;
    private getWhereQuery;
    private getLimitQuery;
}
export {};
