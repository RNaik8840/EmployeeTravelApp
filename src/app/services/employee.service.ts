import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
        //https://localhost:44319/api/
  apiUrl = `${environment.apiBaseUrl}/employees`;

  constructor(private client:HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    return this.client.get<Employee[]>(this.apiUrl);
  }
  add(employee:any):Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl,employee);
  }
}
