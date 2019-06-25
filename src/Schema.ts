import { MysqlError, Pool } from 'mysql';
import { AbstractOperator } from 'src/operator';

type IWhere<T> = { [P in keyof T]?: AbstractOperator };
type IValues<T> = { [P in keyof T]?: string | number };
type IInsert<T> = { [P in keyof T]?: string | number };

export class Table<T> {
    protected tableName = '';

    private columns: string[] = ['*'];
    private whereCondition: IWhere<T> = {};
    protected log = true;

    protected pool?: Pool;
    private resultLimit?: number;

    public setPool(pool: Pool) {
        this.pool = pool;
    }

    public select(columns: string[] = ['*']) {
        this.columns = columns;

        return this;
    }

    public where(where: IWhere<T>) {
        this.whereCondition = where;

        return this;
    }

    public limit(limit: number) {
        this.resultLimit = limit;

        return this;
    }

    public async getFindQuery() {
        const c = this.columns.map(column => `\`${column}\``);
        let query = `SELECT ${c.join(", ")} FROM \`${await this.getTableName()}\``;

        query += this.getWhereQuery();
        query += this.getLimitQuery();
        query += `;`;

        return query;
    }

    public async getUpdateQuery(values: IValues<T>) {
        const s = Object.keys(values).map(key => {
            return `\`${key}\` = "${values[key]}"`;
        });
        let query = `UPDATE \`${await this.getTableName()}\` SET ${s.join(', ')}`;

        query += this.getWhereQuery();
        query += `;`;

        return query;
    }

    public async getDeleteQuery() {
        let query = `DELETE FROM \`${await this.getTableName()}\``;
        query += this.getWhereQuery();
        query += `;`;

        return query;
    }

    public async getInsertQuery(values: Array<IInsert<T>>) {
        const columns: string[] = [];
        const valuesArray: string[] = [];
        values.forEach(value => {
            const values: string[] = [];
            Object.keys(value)
                .forEach(key => {
                    if (!columns.includes(key)) {
                        columns.push(key);
                    }
                    values.push(`"${value[key]}"`);
                });
            valuesArray.push(`(${values.join(', ')})`);
        });


        const c = columns.map(column => `\`${column}\``).join(', ');
        let query = `INSERT INTO \`${await this.getTableName()}\` (${c}) VALUES ${valuesArray.join(', ')}`;
        query += this.getWhereQuery();
        query += `;`;

        return query;
    }

    public async find(): Promise<T[]> {
        const query = await this.getFindQuery();

        return this.query(query);
    }

    public async findOne(): Promise<T> {
        const query = await this.getFindQuery();

        const rows = await this.query<T>(query);

        return rows[0];
    }

    public async findOneOrFail(): Promise<T> {
        this.limit(1);
        const query = await this.getFindQuery();

        const rows = await this.query<T>(query);
        if (rows.length !== 1) {
            throw new Error(`Not just one result found (${query}): ${rows.length}`);
        }

        return rows[0];
    }

    public async update(values: IValues<T>) {
        const query = await this.getUpdateQuery(values);

        return this.query<T>(query);
    }

    public async delete() {
        const query = await this.getDeleteQuery();

        return this.query<T>(query);
    }

    public async insert(values: Array<IInsert<T>>) {
        const query = await this.getInsertQuery(values);

        return this.query<T>(query);
    }

    public async query<S>(sql: string): Promise<S[]> {
        return new Promise((resolve, reject) => {
            if (!this.pool) {
                throw new Error('No pool defined');
            }
            if (this.log) {
                console.log(sql);
            }
            this.pool.query(sql, (err: MysqlError | null, results?: any) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    protected async getPrefix() {
        return '';
    }

    private async getTableName() {
        return `${await this.getPrefix()}${this.tableName}`;

    }

    private getWhereQuery() {
        const w = Object.keys(this.whereCondition).map(key => {
            return `\`${key}\` ${(this.whereCondition[key]).getWhere()}`;
        });

        if (w.length > 0) {
            return ` WHERE ${w.join(" AND ")}`;
        }

        return '';
    }

    private getLimitQuery() {
        if (this.resultLimit) {
            return ` LIMIT ${this.resultLimit}`;
        }

        return '';
    }
}
