import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from'bcrypt';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(data: CreateUserDto) {
    const newModel = new this.userModel(data);
    const hashPassword = await bcrypt.hash(newModel.password, 10)
    newModel.password = hashPassword;
    const model = await newModel.save();
    const { password, ...rta } = model.toJSON();
    return rta;
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }


  update(id: string, changes: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
