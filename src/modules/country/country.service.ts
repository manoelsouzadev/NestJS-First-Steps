import { CountryModel } from "../../models/country.model";
import { Injectable, Body } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection, Query } from "mongoose";

import { Country } from "../../interfaces/country.interface";

@Injectable()
export class CountryService {
  constructor(
    @InjectModel("City") private countryModel: Model<Country>,
    @InjectConnection() private connection: Connection
  ) {}

  async create(countryModel: CountryModel): Promise<Country> {
    const createdCity = new this.countryModel(countryModel);
    return createdCity.save();
  }

  async getAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }

  async getById(id:number){
   return  this.countryModel.findById(id).exec();
  }

  async update(id: number, country: Country) {
    return this.countryModel.findByIdAndUpdate(id, {
      $set: {
        name: country.name,
      },
    });
  }

  async delete(id:number){
    return this.countryModel.findByIdAndDelete(id).exec();
  }
}
