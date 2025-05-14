import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { env } from "../env/env.test";
import { Observable } from "rxjs";
import { Employee } from "../models/Employee";
@Injectable({
    providedIn: "root",
})

export class EmployeeService{
    private baseUrl = `${env.baseUrl}/employee`

    constructor(private http: HttpClient){}

    getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.baseUrl}/get-All`);        
    }

    register(data:any) {
    return this.http.post(`${this.baseUrl}/add`, data, {
      responseType: 'text',
    });
  }
}