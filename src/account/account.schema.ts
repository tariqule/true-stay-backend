import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  // firstName: String,
  // lastName: String,
  email: String,
  phoneNumber: String,
});
