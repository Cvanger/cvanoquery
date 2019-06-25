import { AbstractDDL } from 'src/ddl/AbstractDDL';
declare type IEnums = string[];
declare class EnumDDL extends AbstractDDL {
    private enums;
    constructor(enums: IEnums);
    getDDL(key: string): string[];
}
export declare function enumField(enums: IEnums): EnumDDL;
export {};
