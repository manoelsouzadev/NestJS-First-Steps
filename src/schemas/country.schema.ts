import * as mongoose from "mongoose";

export const CountrySchema = new mongoose.Schema({
  id: Number,
  name: String,
  country: String,
});

