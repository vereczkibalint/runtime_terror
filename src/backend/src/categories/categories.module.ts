import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypegooseModule } from "nestjs-typegoose";
import Category from "./schemas/category.schema";

@Module({
  imports: [TypegooseModule.forFeature([Category])],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
