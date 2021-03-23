import { Module } from '@nestjs/common';
import { MilestonesController } from './milestones.controller';
import { MilestonesService } from './milestones.service';
import { TypegooseModule } from "nestjs-typegoose";
import Milestone from "./schemas/milestone.schema";

@Module({
  imports: [TypegooseModule.forFeature([Milestone])],
  controllers: [MilestonesController],
  providers: [MilestonesService]
})
export class MilestonesModule {}
