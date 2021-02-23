export class TransactionsValidator {
  amountValidator(value: number): boolean {
    return value > 0;
  }
}
