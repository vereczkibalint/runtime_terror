import { Module } from '@nestjs/common';
import { SourcesController } from './sources.controller';
import { SourcesService } from './sources.service';
import { TypegooseModule } from "nestjs-typegoose";
import Source from "./schemas/source.schema";

@Module({
  imports: [TypegooseModule.forFeature([Source])],
  controllers: [SourcesController],
  providers: [SourcesService]
})
export class SourcesModule {}
