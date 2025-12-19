import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Profile, profileSchema } from './schema/profile.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, teacherSchema } from './schema/teacher.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: profileSchema }]),
    MongooseModule.forFeature([{ name: Teacher.name, schema: teacherSchema }]),
  ],
  providers: [TeacherService],
  controllers: [TeacherController],
})
export class TeacherModule {}
