import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TransactionsService } from "./transactions.service";
import { AuthGuard } from "@nestjs/passport";
import Transaction from "./schemas/transaction.schema";
import { ReqUser } from "../auth/decorators/requser.decorator";
import { Types } from "mongoose";
import { CreateTransactionDto } from "./dto/CreateTransactionDto";
import { UpdateTransactionDto } from "./dto/UpdateTransactionDto";

@Controller('transactions')
@ApiTags('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/:accountId')
  async fetchTransaction(@ReqUser('_id') userId: string, @Param('accountId') accountId: string): Promise<Transaction[]>{
    return await this.transactionsService.fetchTransactionByAccount(Types.ObjectId(userId), Types.ObjectId(accountId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction>{
    return await this.transactionsService.createTransaction(createTransactionDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/:transactionId')
  async updateTransaction(@ReqUser('_id') userId: string, @Param('transactionId') transactionId: string, @Body() updateTransactionDto: UpdateTransactionDto): Promise<Transaction>{
    return await this.transactionsService.updateTransaction(Types.ObjectId(userId), Types.ObjectId(transactionId), updateTransactionDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:transactionId')
  async deleteTransaction(@ReqUser('_id') userId: string, @Param('transactionId') transactionId: string): Promise<Transaction>{
    return await this.transactionsService.deleteTransaction(Types.ObjectId(userId), Types.ObjectId(transactionId));
  }
}
