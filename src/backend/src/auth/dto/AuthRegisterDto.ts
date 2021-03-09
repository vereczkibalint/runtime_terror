import { ApiProperty } from "@nestjs/swagger";

export class AuthRegisterDto {
  @ApiProperty()
  lastName!: string;
  @ApiProperty()
  firstName!: string;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  password!: string;
  @ApiProperty()
  passwordConfirm!: string;
}
