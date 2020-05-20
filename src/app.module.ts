import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CountryModule } from './modules/country/country.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://manoel:mongodbnosql@cluster0-4lzxg.mongodb.net/test?retryWrites=true&w=majority'), CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
