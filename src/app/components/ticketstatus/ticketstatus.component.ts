import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketstatusService } from 'src/app/services/ticketstatus.service';

@Component({
  selector: 'app-ticketstatus',
  templateUrl: './ticketstatus.component.html',
  styleUrls: ['./ticketstatus.component.css']
})
export class TicketstatusComponent implements OnInit {
message=localStorage.getItem('message1');
  ticketList!: Ticket[];
  constructor(private ticketService:TicketstatusService) { }
  ngOnInit(): void {
    this.ticketService.getTicketList().subscribe(employee=>{
      this.ticketList = employee;
      console.log(employee);
    },err=>{
      console.log(err);
    });
   }
}
