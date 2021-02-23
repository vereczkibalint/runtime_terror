import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import * as autopopulate from "mongoose-autopopulate";
import { plugin, prop, Ref } from "@typegoose/typegoose";
import User from "../../users/schemas/user.schema";
import * as Validator from './validators/category.validator';
let categoryValidator = new Validator.CategoryValidator();

interface Category extends TimeStamps {}

@plugin(autopopulate as any)
class Category extends Base {
  @prop({
    autopopulate: { select: '-password' },
    required: [true, 'Felhasználó megadása kötelező!'],
    ref: () => User
  })
  owner!: Ref<User>;

  @prop({
    required: [true, 'Név megadása kötelező!'],
    validate: [{
      validator: categoryValidator.nameLengthValidator,
      message: 'A kategória neve legalább 3 karakterből kell álljon!'
    }]
  })
  name!: string;

  @prop({
    validate: [{
      validator: categoryValidator.hexadecimalColorValidator,
      message: 'Hibás színérték!'
    }],
    default: '#e6e6e6'
  })
  color?: string;
}

export default Category;
