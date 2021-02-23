import { plugin, prop, Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import User from "../../users/schemas/user.schema";
import * as autopopulate from 'mongoose-autopopulate';
import * as Validator from './validators/milestone.validator';
import Source from "../../sources/schemas/source.schema";

let milestoneValidator = new Validator.MilestoneValidator();

interface Milestone extends TimeStamps {}

@plugin(autopopulate as any)
class Milestone extends Base {
  @prop({
    required: [true, 'Felhasználó megadása kötelező!'],
    ref: () => User,
    autopopulate: { select: '-password' }
  })
  owner!: Ref<User>;

  @prop({
    required: [true, 'A mérföldkő nevének megadása kötelező!'],
    validate: [{
      validator: milestoneValidator.milestoneNameLengthValidator,
      message: 'A mérföldkő név hosszának 3-100 karakter hosszúnak kell lennie!'
    }]
  })
  name!: string;

  @prop({
    required: [true, 'A célösszeg megadása kötelező!'],
    validate: [{
      validator: milestoneValidator.milestoneGoalPriceAmountValidator,
      message: 'A célösszegnek 0-nál nagyobbnak kell lenni!'
    }]
  })
  goalPrice!: number;

  @prop({
    required: [true, 'A határidő megadása kötelező!'],
    validate: [{
      validator: milestoneValidator.mileStoneDeadLineValidator,
      message: 'A határidő nem lehet a múltban!'
    }]
  })
  deadline!: Date;

  @prop({
    ref: () => Source,
    autopopulate: true
  })
  sources?: Ref<Source>[];
}