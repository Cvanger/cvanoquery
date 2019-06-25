import { AbstractDDL } from 'src/ddl/AbstractDDL';
declare class PrimaryKeyDDL extends AbstractDDL {
    getDDL(key: string): string[];
}
export declare function primaryKey(): PrimaryKeyDDL;
export {};
