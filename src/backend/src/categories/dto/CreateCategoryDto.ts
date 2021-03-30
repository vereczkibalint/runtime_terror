import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class CreateCategoryDto{
  @ApiProperty()
  owner! : Types.ObjectId;

  @ApiProperty()
  name! : string;

  @ApiProperty()
  color? : string;
}