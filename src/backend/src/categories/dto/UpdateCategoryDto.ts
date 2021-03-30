import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class UpdateCategoryDto{
  @ApiProperty()
  name! : string;

  @ApiProperty()
  color? : string;
}