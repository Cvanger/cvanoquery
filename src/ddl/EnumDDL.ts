import { AbstractDDL } from './AbstractDDL';

type IEnums = string[];

class EnumDDL extends AbstractDDL {
    private enums: IEnums;

    constructor(enums: IEnums) {
        super();
        this.enums = enums;
    }

    getDDL(key: string) {
        return super.getDDL(key, `enum(${this.enums.map(e => `'${e}'`).join(', ')})`);
    }
}

export function enumField(enums: IEnums) {
    return new EnumDDL(enums);
}