import { BadRequestException, Injectable } from "@nestjs/common";
import User from "./schemas/user.schema";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AuthRegisterDto } from "../auth/dto/AuthRegisterDto";
import * as bcrypt from "bcryptjs";
import { UserDto } from "../auth/dto/UserDto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {}

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async registerUser(authRegisterDto: AuthRegisterDto): Promise<User> {
    if(authRegisterDto.password !== authRegisterDto.passwordConfirm) {
        throw new BadRequestException("A két jelszó nem egyezik meg!");
    }

    let registeredUser = await this.userModel.create({
      lastName: authRegisterDto.lastName,
      firstName: authRegisterDto.firstName,
      email: authRegisterDto.email,
      password: authRegisterDto.password,
      lastLogin: new Date()
    });

    return await this.userModel.findById(registeredUser._id).select('-password').exec();
  }
}
