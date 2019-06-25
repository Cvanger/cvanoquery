import { AbstractDDL } from './AbstractDDL';
declare class VarcharDDL extends AbstractDDL {
    getDDL(key: string): string[];
}
export declare function varchar(): VarcharDDL;
export {};
