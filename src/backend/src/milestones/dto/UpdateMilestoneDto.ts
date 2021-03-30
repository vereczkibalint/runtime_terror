import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class UpdateMilestoneDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  goalPrice?: number;
}