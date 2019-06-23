import { AbstractOperator } from "./AbstractOperator";

type IInOperatorValues = Array<string | number>;
class InOperator extends AbstractOperator {
  private items: IInOperatorValues;

  constructor(items: IInOperatorValues) {
    super();
    this.items = items;
  }

  public getWhere() {
    return `IN (${this.stringify(this.items).join(", ")})`;
  }
}

export function In(items: IInOperatorValues) {
  return new InOperator(items);
}
