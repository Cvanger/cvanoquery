import { MysqlError, Pool } from 'mysql';

export class Query {
    protected log = true;

    protected pool?: Pool;

    public setPool(pool: Pool) {
        this.pool = pool;
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

}
