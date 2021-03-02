import { Injectable } from '@nestjs/common';
import User from "./schemas/user.schema";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {}

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }
}
