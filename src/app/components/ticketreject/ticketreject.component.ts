import { Component, OnInit } from '@angular/core';
import { Ticket1 } from 'src/app/models/ticket1';
import { TicketrejectService } from 'src/app/services/ticketreject.service';

@Component({
  selector: 'app-ticketreject',
  templateUrl: './ticketreject.component.html',
  styleUrls: ['./ticketreject.component.css']
})
export class TicketrejectComponent implements OnInit {
  message=localStorage.getItem('message2');
  ticketList!: Ticket1[];
  constructor(private rejectService:TicketrejectService) { }
  ngOnInit(): void {
    this.rejectService.getTicketList().subscribe(employee=>{
      this.ticketList = employee;
      console.log(employee);
    },err=>{
      console.log(err);
    });
   }
}
