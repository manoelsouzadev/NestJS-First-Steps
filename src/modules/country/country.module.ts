import { CountryController } from './country.controller';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CountryService } from './country.service';
import { CountrySchema } from '../../schemas/country.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'City', schema: CountrySchema}])],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
