import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./dto/AuthLoginDto";
import { AuthenticatedDto } from "./dto/AuthenticatedDto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() loginDto: AuthLoginDto): Promise<AuthenticatedDto> {
    return await this.authService.login(loginDto);
  }
}
