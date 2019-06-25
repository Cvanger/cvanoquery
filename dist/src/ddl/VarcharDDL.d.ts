import { AbstractDDL } from 'src/ddl/AbstractDDL';
declare class VarcharDDL extends AbstractDDL {
    getDDL(key: string): string[];
}
export declare function varchar(): VarcharDDL;
export {};
