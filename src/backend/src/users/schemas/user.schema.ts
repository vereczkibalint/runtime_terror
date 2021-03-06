import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { plugin, pre, prop } from "@typegoose/typegoose";
import * as Validator from "./validators/user.validator";
import * as UniqueValidator from "mongoose-unique-validator";
import * as bcrypt from "bcryptjs";

let userValidator = new Validator.UserValidator();
interface User extends TimeStamps {}

@pre<User>('save', function(next: any){
  let user = this;
  if(!user.isModified('password')){
    return next();
  }
  user.password = bcrypt.hashSync(user.password, 10);
  next();
})
@plugin(UniqueValidator, {
  message: 'A(z) {VALUE} már használatban van!'
})
class User extends Base {
  @prop({
    required: [true, 'A felhasználó vezetéknevének megadása kötelező!'],
    validate: [{
      validator: userValidator.lastNameLengthValidator,
      message: "A vezetéknév hosszának 1-100 között kell lennie!"
    }]
  })
  lastName!: string;

  @prop({
    required: [true, 'A felhasználó keresztnevének megadása kötelező!'],
    validate: [{
      validator: userValidator.firstNameLengthValidator,
      message: "A keresztnév hosszának 1-100 között kell lennie!"
    }]
  })
  firstName!: string;

  @prop({
    required: [true, 'Az email megadása kötelező!'],
    unique: true,
    validate: [{
      validator: userValidator.emailValidator,
      message: "Hibás email formátum!"
    }]
  })
  email!: string;

  @prop({
    required: [true, 'A jelszó megadása kötelező!'],
    validate: [{
      validator: userValidator.passwordValidator,
      message: "A jelszónak legalább 8 karakter hosszúnak kell lenni!"
    }]
  })
  password!: string;

  @prop()
  lastLogin!: Date;
}

export default User;