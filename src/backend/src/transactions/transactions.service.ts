import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import Transaction from "./schemas/transaction.schema";
import { ReturnModelType } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { CreateTransactionDto } from "./dto/CreateTransactionDto";
import { UpdateTransactionDto } from "./dto/UpdateTransactionDto";
import Account from "../accounts/schemas/account.schema";

@Injectable()
export class TransactionsService {
  constructor(@InjectModel(Transaction) private readonly transactionModel: ReturnModelType<typeof Transaction>,
              @InjectModel(Account) private readonly accountModel: ReturnModelType<typeof Account>) {}

  async fetchTransactionByAccount(userId: Types.ObjectId, accountId: Types.ObjectId): Promise<Transaction[]>{
    let account = await this.accountModel.findOne({ _id: accountId, owner: userId }).exec();
    if(!account){
      throw new BadRequestException('Nincs ilyen fiók');
    }

    return await this.transactionModel.find({ account: accountId }).exec();
  }

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction>{
    let newTransaction = new this.transactionModel(createTransactionDto);
    await newTransaction.save();
    let accountId = (newTransaction.account as Account)._id;
    let account = await this.accountModel.findOne({ _id: accountId }).exec();
    account.balance += newTransaction.amount;
    await account.save();
    return newTransaction;
  }

  async updateTransaction(userId: Types.ObjectId, transactionId: Types.ObjectId, updateTransactionDto: UpdateTransactionDto): Promise<Transaction>{
    let updatedTransaction = await this.transactionModel.findOne({ _id: transactionId}).exec();
    let account = await this.accountModel.findOne({ _id: updatedTransaction.account, owner: userId }).exec();

    if(!updatedTransaction || !account){
      throw new BadRequestException('Nincs ilyen tranzakció!');
    }

    updatedTransaction.amount = updateTransactionDto.amount ? updateTransactionDto.amount : updatedTransaction.amount;
    updatedTransaction.category = updateTransactionDto.category ? updateTransactionDto.category : updatedTransaction.category;
    updatedTransaction.isPeriodic = updateTransactionDto.isPeriodic ? updateTransactionDto.isPeriodic : updatedTransaction.isPeriodic;
    await  updatedTransaction.save();
    return updatedTransaction;
  }

  async deleteTransaction(userId: Types.ObjectId, transactionId: Types.ObjectId): Promise<Transaction>{
    let transactionToDelete = await this.transactionModel.findOne({ _id: transactionId }).exec();

    if(!transactionToDelete)
    {
      throw new BadRequestException('Nincs ilyen tranzakció!');
    }

    let account = await this.accountModel.findOne({ _id: transactionToDelete.account, owner: userId }).exec();

    if(!account){
      throw new BadRequestException('Nincs ilyen fiók!');
    }
    return await this.transactionModel.findOneAndRemove({ _id: transactionId }).exec();
  }
}
