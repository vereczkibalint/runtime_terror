import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto } from "./dto/CreateAccountDto";
import Account from "./schemas/account.schema";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { ReqUser } from "../auth/decorators/requser.decorator";
import { Types } from "mongoose";
import { UpdateAccountDto } from "./dto/UpdateAccountDto";
import { CastErrorExceptionFilter } from "../exceptions/castError-exception.filter";
import { ValidationExceptionFilter } from "../exceptions/validation-exception.filter";
import { ApiErrorExceptionFilter } from "../exceptions/ApiError-exception.filter";

@Controller('accounts')
@ApiTags('accounts')
@UseFilters(new CastErrorExceptionFilter())
@UseFilters(new ValidationExceptionFilter())
@UseFilters(new ApiErrorExceptionFilter())
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async fetchAccounts(@ReqUser('_id') userId: string): Promise<Account[]> {
    return await this.accountService.fetchAccounts(Types.ObjectId(userId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:accountId')
  async fetchAccountById(@Param('accountId') accountId: string, @ReqUser('_id') userId: string): Promise<Account> {
    return await this.accountService.fetchAccountById(Types.ObjectId(accountId), Types.ObjectId(userId));
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return await this.accountService.createAccount(createAccountDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/:accountId')
  async updateAccount(@ReqUser('_id') userId: string, @Param('accountId') accountId: string, @Body() updateAccountDto: UpdateAccountDto): Promise<Account> {
    return await this.accountService.updateAccount(Types.ObjectId(userId), Types.ObjectId(accountId), updateAccountDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:accountId')
  async deleteAccount(@ReqUser('_id') userId: string, @Param('accountId') accountId: string): Promise<Account> {
    return await this.accountService.deleteAccount(Types.ObjectId(userId), Types.ObjectId(accountId));
  }
}
