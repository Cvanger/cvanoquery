import { Table } from 'Table';
import { Equal } from 'operator/EqualOperator';
import { In } from 'operator/InOperator';

class Test {
    name: string;
    pass: string;
}

class TestTable extends Table<Test> {
    protected tableName = 'test';
}

describe('Table', () => {
    it('should generate simple select', async () => {
        const testTable = new TestTable();
        const query = await testTable.select().getFindQuery();
        expect(query).toEqual('SELECT `*` FROM `test`;');
    });
    it('should generate select with columns', async () => {
        const testTable = new TestTable();
        const query = await testTable.select(['name']).getFindQuery();
        expect(query).toEqual('SELECT `name` FROM `test`;');
    });
    it('should generate in select', async () => {
        const testTable = new TestTable();
        const query = await testTable.select(['name']).where({ name: In(['a', 'b']) }).getFindQuery();
        expect(query).toEqual('SELECT `name` FROM `test` WHERE `name` IN ("a", "b");');
    });
    it('should generate equal select', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .select(['name'])
            .where({
                name: Equal('b')
            })
            .getFindQuery();
        expect(query).toEqual('SELECT `name` FROM `test` WHERE `name` = "b";');
    });
    it('should generate mixed where', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .select(['name'])
            .where({
                name: Equal('b'),
                pass: In([1, 2])
            })
            .getFindQuery();
        expect(query).toEqual('SELECT `name` FROM `test` WHERE `name` = "b" AND `pass` IN (1, 2);');
    });
    it('should generate simple update', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .getUpdateQuery({ name: 'a' });
        expect(query).toEqual('UPDATE `test` SET `name` = "a";');
    });
    it('should generate update with where', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .where({ name: Equal('b') })
            .getUpdateQuery({ name: 'a' });
        expect(query).toEqual('UPDATE `test` SET `name` = "a" WHERE `name` = "b";');
    });
    it('should generate simple delete', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .where({ name: Equal('b') })
            .getDeleteQuery();
        expect(query).toEqual('DELETE FROM `test` WHERE `name` = "b";');
    });
    it('should generate complex delete', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .where({ name: Equal('b'), pass: In([2, 3]) })
            .getDeleteQuery();
        expect(query).toEqual('DELETE FROM `test` WHERE `name` = "b" AND `pass` IN (2, 3);');
    });
    it('should generate simple insert', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .getInsertQuery([{ name: 'asd', pass: 'secret' }]);
        expect(query).toEqual('INSERT INTO `test` (`name`, `pass`) VALUES ("asd", "secret");');
    });
    it('should generate multi insert', async () => {
        const testTable = new TestTable();
        const query = await testTable
            .getInsertQuery([{ name: 'asd', pass: 'secret' }, { name: 'asd2', pass: 'secret2' }]);
        expect(query).toEqual('INSERT INTO `test` (`name`, `pass`) VALUES ("asd", "secret"), ("asd2", "secret2");');
    });
});
