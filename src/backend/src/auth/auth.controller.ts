import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/AuthLoginDto";
import { AuthenticatedDto } from "./dto/AuthenticatedDto";
import { AuthRegisterDto } from "./dto/AuthRegisterDto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: AuthLoginDto): Promise<AuthenticatedDto> {
    return await this.authService.login(loginDto);
  }

  @Post('/register')
  async register(@Body() registerDto: AuthRegisterDto): Promise<AuthenticatedDto> {
    return await this.authService.register(registerDto);
  }
}
