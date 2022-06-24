import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  apiUrl=`${environment.apiBaseUrl }/employees`  
  constructor(private client:HttpClient) { }
  getTicketList():Observable<Employee[]>{
    return this.client.get<Employee[]>(this.apiUrl);
  }
  remove(Id:number):Observable<any>{
     return this.client.delete(this.apiUrl + "/" + Id);
    }
}
