import { ApiProperty } from "@nestjs/swagger";

enum AccountTypes {
  bank,
  cash
}

export class UpdateAccountDto {
  @ApiProperty()
  type?: AccountTypes;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  color?: string;
  @ApiProperty()
  balance?: number;
}