import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAllStudent() {
    return this.studentService.getAllStudent();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentByID(id);
  }

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.studentService.removeStudentByID(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.updateStudentByID(id, data);
  }
}
