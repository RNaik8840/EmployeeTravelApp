import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agent } from '../models/agent';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketstatusService {

  apiUrl = `${environment.apiBaseUrl }/accepts`  
  constructor(private client:HttpClient) { }
  add(ticket:Agent):Observable<Ticket>
  {
    return this.client.post<Ticket>(this.apiUrl,ticket);
  }
  getTicketList():Observable<Ticket[]>{
    return this.client.get<Ticket[]>(this.apiUrl);
  }
}
