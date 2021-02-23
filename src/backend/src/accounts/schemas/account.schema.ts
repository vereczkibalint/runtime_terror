import { plugin, prop, Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import User from "../../users/schemas/user.schema";
import * as autopopulate from 'mongoose-autopopulate';
import * as Validator from './validators/account.validator';

let accountValidator = new Validator.AccountValidator();

interface Account extends TimeStamps {}

@plugin(autopopulate as any)
class Account extends Base {
  @prop({
    required: [true, 'Felhasználó megadása kötelező!'],
    ref: () => User,
    autopopulate: { select: '-password' }
  })
  owner!: Ref<User>;

  @prop({
    type: String,
    enum: ['bank', 'cash'],
    default: 'cash'
  })
  type!: string;

  @prop({
    required: [true, 'Név megadása kötelező!'],
    validate: [{
      validator: accountValidator.nameLengthValidator,
      message: 'A névnek legalább 3 karakterből kell állnia!'
    }]
  })
  name!: string;

  @prop({
    validate: [{
      validator: accountValidator.hexadecimalColorValidator,
      message: 'Hibás színérték!'
    }],
    default: '#e6e6e6'
  })
  color?: string;

  @prop({
    required: [true, 'Egyenleg megadása kötelező!'],
    validate: [{
      validator: accountValidator.balanceAmountValidator,
      message: 'Az egyenlegnek 0-nál nagyobbnak kell lennie!'
    }]
  })
  balance!: number;
}

export default Account;
