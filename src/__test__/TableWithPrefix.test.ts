import { Table } from 'Table';

class Test {
    name: string;
    pass: string;
}

class TestTableWithPrefix extends Table<Test> {
    protected tableName = 'test';

    protected async getPrefix(): Promise<string> {
        return new Promise<string>(resolve => {
            setTimeout(() => {
                resolve('asd_')
            }, 100);
        });
    }
}

describe('Table', () => {
    it('should generate simple select', async () => {
        const testTable = new TestTableWithPrefix();
        const query = await testTable.select().getFindQuery();
        expect(query).toEqual('SELECT `*` FROM `asd_test`;');
    });

});
