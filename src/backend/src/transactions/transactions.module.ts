import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypegooseModule } from "nestjs-typegoose";
import Transaction from "./schemas/transaction.schema";
import Account from "../accounts/schemas/account.schema";

@Module({
  imports: [TypegooseModule.forFeature([Transaction]), TypegooseModule.forFeature([Account])],
  providers: [TransactionsService],
  controllers: [TransactionsController]
})
export class TransactionsModule {}
