import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agent } from '../models/agent';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  apiUrl = `${environment.apiBaseUrl }/agents`  
  constructor(private client:HttpClient) { }
  add(employee:Employee):Observable<Agent>
  {
    return this.client.post<Agent>(this.apiUrl,employee);
  }
  getAgentList():Observable<Agent[]>{
    return this.client.get<Agent[]>(this.apiUrl);
  }
}
