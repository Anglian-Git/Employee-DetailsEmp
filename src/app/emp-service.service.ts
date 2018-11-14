import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Http, Response, URLSearchParams } from "@angular/http";
import { environment } from "src/environments/environment";

export interface Empfunction {
  r: number;
  x: number;
}

@Injectable({
  providedIn: "root"
})
export class EmpServiceService {
  constructor(public http: Http) {}
  getEmployeeDetails(id: string): Observable<any> {
    const apiUrl = `${environment.config.apiUrl}/api/getEmployeeDetails/${id}`;
    return this.http
      .get(apiUrl)
      .pipe(map((response: Response) => response.json()));
  }
}
