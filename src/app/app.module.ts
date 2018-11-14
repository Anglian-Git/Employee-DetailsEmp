
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { appRoutes } from './routes';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EmpServiceService } from './emp-service.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }