import { AbstractDDL } from './AbstractDDL';

class VarcharDDL extends AbstractDDL {
    getDDL(key: string) {
        return super.getDDL(key, `varchar (255)`);
    }
}

export function varchar() {
    return new VarcharDDL();
}