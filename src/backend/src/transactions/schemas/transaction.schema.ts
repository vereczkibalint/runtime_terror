import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import * as autopopulate from "mongoose-autopopulate";
import { plugin, prop, Ref } from "@typegoose/typegoose";
import Account from "../../accounts/schemas/account.schema";
import * as Validator from './validators/transactions.validator';
import Category from "../../categories/schemas/category.schema";
let transactionValidator = new Validator.TransactionsValidator();

interface Transaction extends TimeStamps {}

@plugin(autopopulate as any)
class Transaction extends Base {
  @prop({
    autopopulate: true,
    required: [true, 'Számla megadása kötelező!'],
    ref: () => Account
  })
  account!: Ref<Account>;

  @prop({
    required: [true, 'Érték megadása kötelező!'],
    validate: [{
      validator: transactionValidator.amountValidator,
      message: 'Az értéknek 0-nál nagyobbnak kell lennie!'
    }]
  })
  amount!: number;

  @prop({
    autopopulate: true,
    required: [true, 'Kategória megadása kötelező!'],
    ref: () => Category
  })
  category!: Ref<Category>;

  @prop({
    default: false
  })
  isPeriodic: boolean;
}

export default Transaction;
