import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CountryModule } from './modules/country/country.module';
import { environment } from './environments/environment';

@Module({
  imports: [MongooseModule.forRoot(environment.mongoURI), CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
