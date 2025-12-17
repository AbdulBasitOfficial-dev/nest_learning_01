import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, studentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<studentDocument>,
  ) {}
  // Post
  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }

  //   Get
  async getAllStudent() {
    return this.studentModel.find();
  }

  // Get By Id
  async getStudentByID(id: string) {
    const student = await this.studentModel.findById(id);
    if (!student) {
      throw new NotFoundException('Student is not found');
    }
    return student;
  }

  //   Delete By Id
  async removeStudentByID(id: string) {
    const student = await this.studentModel.findByIdAndDelete(id);
    if (!student) {
      throw new NotFoundException('Student is not found');
    }
    return { message: 'Student Deleted Successfully', data: student };
  }

  //   Update By Id
  async updateStudentByID(id: string, data: Partial<Student>) {
    const student = await this.studentModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!student) {
      throw new NotFoundException('Student is not found');
    }
    return { message: 'Student updated Successfully', data: student };
  }
}
