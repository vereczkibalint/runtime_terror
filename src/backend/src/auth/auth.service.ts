import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/AuthLoginDto';
import { UserDto } from './dto/UserDto';
import { AuthenticatedDto } from './dto/AuthenticatedDto';
import * as bcrypt from 'bcryptjs';
import { AuthRegisterDto } from "./dto/AuthRegisterDto";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  async login(authLoginDto: AuthLoginDto): Promise<AuthenticatedDto> {
    const user = await this.userService.findByEmail(authLoginDto.email);

    if(!user) {
      throw new HttpException('Nincs felhasználó ilyen email címmel!', HttpStatus.UNAUTHORIZED);
    }

    const passwordsAreMatching = await bcrypt.compare(authLoginDto.password, user.password);

    if(!passwordsAreMatching) {
      throw new HttpException('Sikertelen bejelentkezés!', HttpStatus.UNAUTHORIZED);
    }

    const userDto: UserDto = {
      _id: user._id,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      lastLogin: user.lastLogin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    const token = this._createToken(userDto);

    return {
      token,
      user: userDto
    }
  }

  async register(authRegisterDto: AuthRegisterDto) : Promise<AuthenticatedDto> {
    let registeredUser = await this.userService.registerUser(authRegisterDto);

    const userDto: UserDto = {
      _id: registeredUser._id,
      lastName: registeredUser.lastName,
      firstName: registeredUser.firstName,
      email: registeredUser.email,
      lastLogin: registeredUser.lastLogin,
      createdAt: registeredUser.createdAt,
      updatedAt: registeredUser.updatedAt
    };

    let token = this._createToken(userDto);

    return {
      token,
      user: userDto
    }
  }


  private _createToken(user: UserDto): string {
    return this.jwtService.sign(user);
  }
}
