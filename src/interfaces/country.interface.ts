import * as mongoose from 'mongoose';

export interface Country extends mongoose.Document{
    name: string;
  }
  