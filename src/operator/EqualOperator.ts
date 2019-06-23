import { AbstractOperator } from "./AbstractOperator";

type IEqualOperatorValues = string | number;

class EqualOperator extends AbstractOperator {
  private item: IEqualOperatorValues;

  constructor(item: IEqualOperatorValues) {
    super();
    this.item = item;
  }

  public getWhere() {
    return `= ${this.stringify([this.item])}`;
  }
}

export function Equal(value: IEqualOperatorValues) {
  return new EqualOperator(value);
}
