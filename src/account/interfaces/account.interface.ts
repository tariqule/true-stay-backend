import { Document } from 'mongoose';

export interface Account extends Document {
  // readonly firstName: string;
  // readonly lastName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly password: string;
}
