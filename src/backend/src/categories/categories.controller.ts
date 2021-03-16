import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import Category from "./schemas/category.schema";
import { AuthGuard } from "@nestjs/passport";
import { ReqUser } from "../auth/decorators/requser.decorator";
import { Types } from "mongoose";
import { ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "./dto/CreateCategoryDto";
import { UpdateCategoryDto } from "./dto/UpdateCategoryDto";

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoryService : CategoriesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async fetchCategories(@ReqUser('_id') userId: string) : Promise<Category[]>{
    return await this.categoryService.fetchCategories(Types.ObjectId(userId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:categoryId')
  async fetchCategory(@ReqUser('_id') userId: string, @Param('categoryId') categoryId: string) : Promise<Category>{
    return await  this.categoryService.fetchCategory(Types.ObjectId(userId), Types.ObjectId(categoryId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) : Promise<Category>{
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:categoryId')
  async updateCategory(@ReqUser('_id') userId: string, @Param('categoryId') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto) : Promise<Category>{
    return await this.categoryService.updateCategory(Types.ObjectId(userId), Types.ObjectId(categoryId), updateCategoryDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:categoryId')
  async deleteCategory(@ReqUser('_id') userId: string, @Param('categoryId') categoryId: string) : Promise<Category>{
    return await this.categoryService.deleteCategory(Types.ObjectId(userId), Types.ObjectId(categoryId));
  }
}
