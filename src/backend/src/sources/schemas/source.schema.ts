import { plugin, prop, Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import * as autopopulate from 'mongoose-autopopulate';
import Account from "../../accounts/schemas/account.schema";
import * as Validator from './validators/source.validator';

let sourceValidator = new Validator.SourceValidator();

interface Source extends TimeStamps {}

@plugin(autopopulate as any)
class Source extends Base {
  @prop({
    required: [true, 'Fiók megadása kötelező!'],
    ref: () => Account,
    autopopulate: true
  })
  account!: Ref<Account>;

  @prop({
    required: [true, 'Érték megadása kötelező!'],
    validate: [{
      validator: sourceValidator.amountValueValidator,
      message: 'Az értéknek 0-nál nagyobbnak kell lennie!'
    }]
  })
  amount!: number;
}

export default Source;