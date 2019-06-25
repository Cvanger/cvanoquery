import { createTable } from 'src/Schema';
import { primaryKey } from 'src/ddl/PrimaryKeyDDL';
import { varchar } from 'src/ddl/VarcharDDL';
import { date } from 'src/ddl/DateDDL';
import { enumField } from 'src/ddl/EnumDDL';

enum ChampionshipStatus {
    active = "active",
    inactive = "inactive"
}

class Championship {
    public id: number;

    public name: string;

    public date: Date;

    public status: ChampionshipStatus;

    public prefix: string;
}


describe('Schema', () => {
    it('should create table', async () => {
        const query = createTable<Championship>('championship', {
            id: primaryKey(),
            name: varchar().notNull(),
            date: date(),
            status: enumField(Object.keys(ChampionshipStatus)),
            prefix: varchar(),
        });
        expect(query).toEqual('CREATE TABLE `championship` (`id` int(11) AUTO_INCREMENT NOT NULL, PRIMARY KEY (`id`), `name` varchar (255) NOT NULL, `date` date, `status` enum(\'active\', \'inactive\'), `prefix` varchar (255));');
    });
});
