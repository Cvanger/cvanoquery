import { AbstractDDL } from 'src/ddl/AbstractDDL';
declare class DateDDL extends AbstractDDL {
    getDDL(key: string): string[];
}
export declare function date(): DateDDL;
export {};
