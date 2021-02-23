import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from "nestjs-typegoose";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }), TypegooseModule.forRoot(process.env.MONGO_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
