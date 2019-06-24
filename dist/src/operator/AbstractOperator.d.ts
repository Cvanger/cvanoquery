export declare abstract class AbstractOperator {
    abstract getWhere(): string;
    protected stringify(items: Array<string | number>): string[];
}
