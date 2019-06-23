export abstract class AbstractOperator {
    public abstract getWhere(): string;

    protected stringify(items: Array<string | number>) {
        return items.map(item => {
            const type = typeof item;
            switch (type) {
                case "string":
                    return `"${item}"`;
                case "number":
                    return String(item);
                default:
                    throw new Error(`Unhandled type of equal item: ${type}`);
            }
        });
    }
}
