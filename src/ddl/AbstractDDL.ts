export class AbstractDDL {
    private field: string;

    constructor() {

    }

    public getDDL(key: string, ddl: string): string[] {
        let finalDDL = `\`${key}\` ${ddl}`;
        if (this.isNotNull) {
            finalDDL += ' NOT NULL';
        }
        return [finalDDL];
    };

    private isNotNull: boolean;

    public notNull() {
        this.isNotNull = true;

        return this;
    }
}