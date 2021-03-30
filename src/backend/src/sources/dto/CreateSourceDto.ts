import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateSourceDto {
  @ApiProperty()
  account!: Types.ObjectId;
  @ApiProperty()
  amount!: number;
}