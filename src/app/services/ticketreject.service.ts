import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agent } from '../models/agent';
import { Ticket } from '../models/ticket';
import { Ticket1 } from '../models/ticket1';

@Injectable({
  providedIn: 'root'
})
export class TicketrejectService {

  apiUrl = `${environment.apiBaseUrl }/rejects`  
  constructor(private client:HttpClient) { }
  reject(ticket:Agent):Observable<Ticket>
  {
    return this.client.post<Ticket>(this.apiUrl,ticket);
  }
  getTicketList():Observable<Ticket[]>{
    return this.client.get<Ticket[]>(this.apiUrl);
  }
}
