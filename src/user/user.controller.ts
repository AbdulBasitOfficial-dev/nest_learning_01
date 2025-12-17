import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return 'basit bahi nest js ab sikh rha ho fully funded naha haha hahha haello bahii  ';
  }
}
