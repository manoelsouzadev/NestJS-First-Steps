import { Country } from './../../interfaces/country.interface';
import { CountryModel } from '../../models/country.model';
import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  getAll(){
    return this.countryService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id:number){
    return this.countryService.getById(id);
  }

  @Post()
  create(@Body() city: CountryModel){
    return this.countryService.create(city);
  }

  @Put(':id')
  update(@Param('id') id:number, @Body() country:Country){
    this.countryService.update(id, country);
  }

  @Delete(':id')
  delete(@Param('id') id:number){
    this.countryService.delete(id);
  }
}
