import { AbstractDDL } from './AbstractDDL';
declare class DateDDL extends AbstractDDL {
    getDDL(key: string): string[];
}
export declare function date(): DateDDL;
export {};
