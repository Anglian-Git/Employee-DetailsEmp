import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  getEmployee(id: number) {
    return Employee.find(event => event.id === id);
  }
}
      const Employee  =
      [
          { name: 'Tom', id: 1001 , location: 'Mumbai', Designation: 'Analyst' },
          { name: 'Alex', id: 1002 , location: 'Banglore', Designation: 'Sr.Analyst' },
          { name: 'Steve', id: 1003 , location: 'Hyderabad', Designation: 'consultant' }

             ];
