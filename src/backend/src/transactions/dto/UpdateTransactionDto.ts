import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class UpdateTransactionDto{
  @ApiProperty()
  amount?: number;

  @ApiProperty()
  category?: Types.ObjectId;

  @ApiProperty()
  isPeriodic?: boolean;
}