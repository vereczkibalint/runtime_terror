import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import Account from "./schemas/account.schema";
import { ReturnModelType } from "@typegoose/typegoose";
import { CreateAccountDto } from "./dto/CreateAccountDto";
import { Types } from "mongoose";
import { UpdateAccountDto } from "./dto/UpdateAccountDto";

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account) private readonly accountModel: ReturnModelType<typeof Account>) {}

  async fetchAccounts(userId: Types.ObjectId): Promise<Account[]> {
    return await this.accountModel.find({ owner: userId }).exec();
  }

  async fetchAccountById(accountId: Types.ObjectId, userId: Types.ObjectId): Promise<Account> {
    return await this.accountModel.findOne({ _id: accountId, owner: userId }).exec();
  }

  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    let createdAccount = new this.accountModel(createAccountDto);
    await createdAccount.save();

    return createdAccount;
  }

  async updateAccount(userId: Types.ObjectId, accountId: Types.ObjectId, updateAccountDto: UpdateAccountDto): Promise<Account> {
    let account = await this.accountModel.findOne({ _id: accountId, owner: userId }).exec();

    if(!account) {
      throw new BadRequestException("Fiók nem található!");
    }

    account.type = updateAccountDto.type ? updateAccountDto.type.toString() : account.type;
    account.name = updateAccountDto.name ? updateAccountDto.name : account.name;
    account.color = updateAccountDto.color ? updateAccountDto.color : account.color;
    account.balance = updateAccountDto.balance ? updateAccountDto.balance : account.balance;
    await account.save();

    return account;
  }

  async deleteAccount(userId: Types.ObjectId, accountId: Types.ObjectId): Promise<Account> {
    return await this.accountModel.findOneAndRemove({ _id: accountId, owner: userId }).exec();
  }
}
