import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './schema/profile.schema';
import { Model } from 'mongoose';
import { Teacher } from './schema/teacher.schema';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Profile.name) private profileMode: Model<Profile>,
    @InjectModel(Teacher.name) private teacherMode: Model<Teacher>,
  ) {}

  async createTeacher() {
    const profile = await new this.profileMode({
      age: 50,
      qualification: 'Fail',
    }).save();
    const teacher = await new this.teacherMode({
      name: 'Abdul basit',
      email: 'basit@gmail.com',
      profile: profile._id,
    }).save();
    return teacher;
  }

  async getAllTeacher() {
    return this.teacherMode.find().populate('profile').exec();
  }
}
