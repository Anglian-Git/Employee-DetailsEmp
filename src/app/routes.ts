import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const appRoutes: Routes = [
{ path: 'employee', component: EmployeeComponent },
{ path: 'employee-details/:id', component: EmployeeDetailsComponent },
{ path: '', redirectTo: '/employee', pathMatch: 'full' }
];
