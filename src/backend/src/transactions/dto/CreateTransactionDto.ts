import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateTransactionDto{
  @ApiProperty()
  account!: Types.ObjectId;

  @ApiProperty()
  amount!: number;

  @ApiProperty()
  category!: Types.ObjectId;

  @ApiProperty()
  isPeriodic?: boolean;
}