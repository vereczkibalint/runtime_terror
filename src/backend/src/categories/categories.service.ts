import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import Category from "./schemas/category.schema";
import { ReturnModelType } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { CreateCategoryDto } from "./dto/CreateCategoryDto";
import { UpdateCategoryDto } from "./dto/UpdateCategoryDto";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private readonly categoryModel: ReturnModelType<typeof Category>) {}

  async fetchCategories(userId: Types.ObjectId) : Promise<Category[]>{
    return await this.categoryModel.find({ owner: userId }).exec();
  }

  async fetchCategory(userId: Types.ObjectId, categoryId: Types.ObjectId) : Promise<Category>{
    return await this.categoryModel.findOne({ owner: userId, _id: categoryId }).exec();
  }

  async createCategory(createCategoryDto: CreateCategoryDto) : Promise<Category>{
    let newCategory = new this.categoryModel(createCategoryDto);
    await newCategory.save();
    return newCategory;
  }

  async updateCategory(userId: Types.ObjectId, categoryId: Types.ObjectId, updateCategoryDto: UpdateCategoryDto) : Promise<Category>{
    let updatedCategory = await this.categoryModel.findOne({ _id: categoryId, owner: userId });
    if(!updatedCategory){
      throw new BadRequestException('Nincs ilyen kategória!');
    }

    updatedCategory.name = updateCategoryDto.name ? updateCategoryDto.name : updatedCategory.name;
    updatedCategory.color = updateCategoryDto.color ? updateCategoryDto.color : updatedCategory.color;
    await updatedCategory.save();
    return updatedCategory;
  }

  async deleteCategory(userId: Types.ObjectId, categoryId: Types.ObjectId) : Promise<Category>{
    return await this.categoryModel.findOneAndRemove({ _id: categoryId, owner: userId }).exec();
  }
}
