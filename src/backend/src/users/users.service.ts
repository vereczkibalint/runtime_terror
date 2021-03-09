import { BadRequestException, Injectable } from "@nestjs/common";
import User from "./schemas/user.schema";
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AuthRegisterDto } from "../auth/dto/AuthRegisterDto";
import * as bcrypt from "bcryptjs";

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

    let registeredUser = new this.userModel(authRegisterDto);

    let passwordSalt = bcrypt.genSaltSync(10);
    let passwordHash = bcrypt.hashSync(authRegisterDto.password, passwordSalt);
    registeredUser.password = passwordHash;
    await registeredUser.save();

    return await this.userModel.findById(registeredUser._id).select('-password').exec();
  }
}
