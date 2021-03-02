import { Types } from 'mongoose';

export class UserDto {
  _id: Types.ObjectId;
  lastName: string;
  firstName: string;
  email: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}
