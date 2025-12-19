import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument } from './user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<userDocument>,
    private JwtService: JwtService,
  ) {}

  async signUp(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const user = new this.userModel({
      email,
      password: hash,
    });
    return user.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new NotFoundException();
    const payload = {
      email: user.email,
      sub: user._id,
    };
    return {
      accesst_token: this.JwtService.sign(payload),
    };
  }

  async getUser() {
    return this.userModel.find().exec();
  }
}
