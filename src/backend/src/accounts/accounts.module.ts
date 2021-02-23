import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypegooseModule } from "nestjs-typegoose";
import Account from "./schemas/account.schema";

@Module({
  imports: [TypegooseModule.forFeature([Account])],
  providers: [AccountsService],
  controllers: [AccountsController]
})
export class AccountsModule {}
