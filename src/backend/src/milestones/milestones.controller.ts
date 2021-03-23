import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from "@nestjs/common";
import { MilestonesService } from "./milestones.service";
import { AuthGuard } from "@nestjs/passport";
import { CreateMilestoneDto } from "./dto/CreateMilestoneDto";
import Milestone from "./schemas/milestone.schema";
import { ReqUser } from "../auth/decorators/requser.decorator";
import { Types } from "mongoose";
import { ApiTags } from "@nestjs/swagger";
import { CastErrorExceptionFilter } from "../exceptions/castError-exception.filter";
import { ValidationExceptionFilter } from "../exceptions/validation-exception.filter";
import { ApiErrorExceptionFilter } from "../exceptions/ApiError-exception.filter";
import { UpdateMilestoneDto } from "./dto/UpdateMilestoneDto";


@Controller('milestones')
@UseFilters(new CastErrorExceptionFilter())
@UseFilters(new ValidationExceptionFilter())
@UseFilters(new ApiErrorExceptionFilter())
@ApiTags('Milestones')
export class MilestonesController {
  constructor(private readonly milestoneService: MilestonesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async fetchAllMilestone(@ReqUser('_id') userId: string): Promise<Milestone[]> {
    return await this.milestoneService.fetchAllMilestone(Types.ObjectId(userId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createMilestone(@Body() createMilestoneDto: CreateMilestoneDto): Promise<Milestone> {
    return await this.milestoneService.createMilestone(createMilestoneDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/:milestoneId')
  async updateMilestone(@ReqUser('_id') userId: string, @Body() updateMilestoneDto: UpdateMilestoneDto): Promise<Milestone> {
    return await this.milestoneService.updateMilestone(Types.ObjectId(userId), updateMilestoneDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:milestoneId')
  async deleteMilestone(@ReqUser('_id') userId: string, @Param('milestoneId') milestoneId: string): Promise<Milestone> {
    return await this.milestoneService.deleteMilestone(Types.ObjectId(userId), Types.ObjectId(milestoneId));
  }
}
