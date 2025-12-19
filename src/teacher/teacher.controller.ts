import { Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async createteacher() {
    return this.teacherService.createTeacher();
  }

  @Get()
  async getAllTeacherProfile() {
    return this.teacherService.getAllTeacher();
  }
}
