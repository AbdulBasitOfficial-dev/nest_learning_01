import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getEmployee() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: number) {
    return this.employeeService.getEmployeeByID(Number(id));
  }

  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.employeeService.createEmployee(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: { name: string; age: number }) {
    return this.employeeService.UpdateEmployee(Number(id), body);
  }

  @Patch(':id')
  patch(
    @Param('id') id: number,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    return this.employeeService.patchEmployee(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.employeeService.removeEmployee(Number(id));
  }
}
