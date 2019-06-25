export declare class AbstractDDL {
    private field;
    constructor();
    getDDL(key: string, ddl: string): string[];
    private isNotNull;
    notNull(): this;
}
