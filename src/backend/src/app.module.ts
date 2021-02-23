import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from "nestjs-typegoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { SourcesModule } from './sources/sources.module';
import { CategoriesModule } from "./categories/categories.module";
import { MilestonesModule } from './milestones/milestones.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), TypegooseModule.forRoot(process.env.MONGO_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }), UsersModule, AccountsModule, SourcesModule, CategoriesModule, MilestonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
