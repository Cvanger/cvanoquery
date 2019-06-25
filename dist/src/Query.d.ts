import { Pool } from 'mysql';
export declare class Query {
    protected log: boolean;
    protected pool?: Pool;
    setPool(pool: Pool): void;
    query<S>(sql: string): Promise<S[]>;
}
