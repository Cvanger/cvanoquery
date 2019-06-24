import { AbstractOperator } from "./AbstractOperator";
declare type IEqualOperatorValues = string | number;
declare class EqualOperator extends AbstractOperator {
    private item;
    constructor(item: IEqualOperatorValues);
    getWhere(): string;
}
export declare function Equal(value: IEqualOperatorValues): EqualOperator;
export {};
