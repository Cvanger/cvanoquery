import { AbstractDDL } from 'src/ddl/AbstractDDL';

class DateDDL extends AbstractDDL {
    getDDL(key: string) {
        return super.getDDL(key, `date`);
    }
}

export function date() {
    return new DateDDL();
}