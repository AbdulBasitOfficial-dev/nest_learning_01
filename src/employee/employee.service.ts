import { Injectable, NotFoundException } from '@nestjs/common';
import { employee } from 'src/interfaces/Employee.interface';

@Injectable()
export class EmployeeService {
  private employees: employee[] = [
    { id: 1, name: 'basit', age: 22 },
    { id: 2, name: 'ali', age: 21 },
    { id: 3, name: 'ahmad', age: 19 },
    { id: 4, name: 'raza', age: 24 },
  ];

  // Get
  getAllEmployees(): employee[] {
    return this.employees;
  }

  //GetByIg
  getEmployeeByID(id: number): employee {
    const employee = this.employees.find((e) => e.id === id);
    if (!employee) {
      throw new NotFoundException('Employee is not exist');
    }
    return employee;
  }

  //   Post
  createEmployee(data: { name: string; age: number }): employee {
    const id = Date.now();
    const newEmployee = {
      id: id,
      ...data,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  //   Put
  UpdateEmployee(id: number, data: { name: string; age: number }): employee {
    const index = this.employees.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new NotFoundException('Employe is not found ');
    }
    this.employees[index] = { id: id, ...data };
    return this.employees[index];
  }

  //   patch
  patchEmployee(
    id: number,
    data: Partial<{ name: string; age: number }>,
  ): employee {
    const index = this.employees.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new NotFoundException('Employe is not found ');
    }
    const patchEmp = Object.assign(this.employees[index], data);
    return patchEmp;
  }

  // Delete
  removeEmployee(id: number) {
    const index = this.employees.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new NotFoundException('Employe is not found ');
    }
    const dele = this.employees.splice(index, 1);
    return { message: 'Employee is deleted ', deleted: dele[0] };
  }
}
