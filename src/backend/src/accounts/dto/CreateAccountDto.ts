import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

enum AccountTypes {
  bank,
  cash
}

export class CreateAccountDto {
  @ApiProperty()
  owner!: Types.ObjectId;
  @ApiProperty()
  type!: AccountTypes;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  color!: string;
  @ApiProperty()
  balance!: number;
}