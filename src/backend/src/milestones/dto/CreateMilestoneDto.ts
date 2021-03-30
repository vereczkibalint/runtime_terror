import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateMilestoneDto {
  @ApiProperty()
  owner!: Types.ObjectId;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  goalPrice!: number;
  @ApiProperty()
  deadline!: Date;
}