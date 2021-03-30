import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import Milestone from "./schemas/milestone.schema";
import { ReturnModelType } from "@typegoose/typegoose";
import { CreateMilestoneDto } from "./dto/CreateMilestoneDto";
import { Types } from "mongoose";
import { UpdateMilestoneDto } from "./dto/UpdateMilestoneDto";

@Injectable()
export class MilestonesService {
  constructor(@InjectModel(Milestone) private readonly milestoneModel: ReturnModelType<typeof Milestone>) {}

  async fetchAllMilestone(userId: Types.ObjectId): Promise<Milestone[]> {
    return await this.milestoneModel.find({ owner: userId }).exec();
  }

  async createMilestone(createMilestoneDto: CreateMilestoneDto): Promise<Milestone> {
    let newMilestone = new this.milestoneModel(createMilestoneDto);
    await newMilestone.save();

    return newMilestone;
  }

  async updateMilestone(userId: Types.ObjectId, updateMilestoneDto: UpdateMilestoneDto): Promise<Milestone> {
    let updatedMilestone = await this.milestoneModel.findOne({ owner: userId }).exec();
    if(!updatedMilestone) {
      throw new BadRequestException('Nincs ilyen mérföldkő!');
    }

    updatedMilestone.name = updateMilestoneDto.name ? updateMilestoneDto.name : updatedMilestone.name;
    updatedMilestone.goalPrice = updateMilestoneDto.goalPrice ? updateMilestoneDto.goalPrice : updatedMilestone.goalPrice;
    await updatedMilestone.save();

    return updatedMilestone;
  }

  async deleteMilestone(userId: Types.ObjectId, milestoneId: Types.ObjectId): Promise<Milestone> {
    let milestoneToDelete = await this.milestoneModel.findOne({ _id: milestoneId, owner: userId }).exec();
    if(!milestoneToDelete) {
      throw new BadRequestException('Nincs ilyen mérföldkő!');
    }

    return this.milestoneModel.findOneAndRemove({ _id: milestoneId, owner: userId }).exec();
  }
}
