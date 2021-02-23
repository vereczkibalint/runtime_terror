import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypegooseModule } from "nestjs-typegoose";
import Transaction from "./schemas/transaction.schema";

@Module({
  imports: [TypegooseModule.forFeature([Transaction])],
  providers: [TransactionsService],
  controllers: [TransactionsController]
})
export class TransactionsModule {}
