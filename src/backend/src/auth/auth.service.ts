import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/AuthLoginDto';
import { UserDto } from './dto/UserDto';
import { AuthenticatedDto } from './dto/AuthenticatedDto';
import * as bcrypt from 'bcryptjs';

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


  private _createToken(user: UserDto): string {
    return this.jwtService.sign(user);
  }
}