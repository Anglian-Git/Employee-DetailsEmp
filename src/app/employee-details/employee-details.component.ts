import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;
  constructor( private employeeService: EmployeeService,
              private route: ActivatedRoute,private router: Router) {

  }
  id: number;
  sub: any;
  event: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.event = this.employeeService.getEmployee(this.id);
      if(this.event == null)
      {
        this.router.navigate([`/employee`]);

      }
    });
  }


}
