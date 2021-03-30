import { Module } from '@nestjs/common';
import { MilestonesController } from './milestones.controller';
import { MilestonesService } from './milestones.service';
import { TypegooseModule } from "nestjs-typegoose";
import Milestone from "./schemas/milestone.schema";
import Source from "./schemas/source.schema";

@Module({
  imports: [TypegooseModule.forFeature([Milestone, Source])],
  controllers: [MilestonesController],
  providers: [MilestonesService]
})
export class MilestonesModule {}
