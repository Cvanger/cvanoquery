import { AbstractDDL } from './AbstractDDL';

class PrimaryKeyDDL extends AbstractDDL {
    getDDL(key: string) {
        const a = super.getDDL(key, `int(11) AUTO_INCREMENT`);
        a.push(`PRIMARY KEY (\`${key}\`)`);

        return a;
    }
}

export function primaryKey() {
    const ddl = new PrimaryKeyDDL();

    return ddl.notNull();
}