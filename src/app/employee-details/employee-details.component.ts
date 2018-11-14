import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { EmpServiceService } from "../emp-service.service";
@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  empserviceservice: EmpServiceService;
  constructor(
    empserviceservice: EmpServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.empserviceservice = empserviceservice;
  }
  id: number;
  sub: any;
  event: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.empserviceservice
        .getEmployeeDetails(this.id.toString())
        .subscribe(empdetails => {
          this.event = empdetails;
          console.log(this.event);
        });
    });
  }
}
