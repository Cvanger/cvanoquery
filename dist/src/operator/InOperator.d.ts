import { AbstractOperator } from "./AbstractOperator";
declare type IInOperatorValues = Array<string | number>;
declare class InOperator extends AbstractOperator {
    private items;
    constructor(items: IInOperatorValues);
    getWhere(): string;
}
export declare function In(items: IInOperatorValues): InOperator;
export {};
