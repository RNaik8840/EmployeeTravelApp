import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent.service';
import { TicketrejectService } from 'src/app/services/ticketreject.service';
import { TicketstatusService } from 'src/app/services/ticketstatus.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
message='';
  ticketList!: Agent[];
  constructor(private ticketService:TicketstatusService, private agentService: AgentService, private rejectService:TicketrejectService) { }
  ngOnInit(): void {
    this.agentService.getAgentList().subscribe(employee=>{
      this.ticketList = employee;
      console.log(employee);
    },err=>{
      console.log(err);
    });
   }
confirm(employee:Agent)
  {
    this.ticketService.getTicketList().subscribe(response => {
      let arr: any = [];
      response.forEach((item) => {
        if(item.agentId == employee.agentId){
          console.log("matching: ", item.agentId , " == ", employee.agentId);
          arr.push(item);
        }
      })
      console.log("arr: ", JSON.stringify(arr));
      if(arr.length > 0)
      {
         alert("The Ticket Is Already Confirmed");
      }
      else
      {
        this.ticketService.add(employee).subscribe(result=>{
          var message: any='Confirm';
          localStorage.setItem('message1',JSON.stringify(message));
          alert('Ticket Confirmed');
          console.log(result);
        }, err=>{
          alert('Your are doing something wrong.');
          console.log(err);
        })
      }
    });  
  }
  reject(agent:Agent)
  {
    this.rejectService.getTicketList().subscribe(response => {
      let arr: any = [];
      response.forEach((item) => {
        if(item.agentId == agent.agentId){
          console.log("matching: ", item.agentId , " == ", agent.agentId);
          arr.push(item);
        }
      })
      console.log("arr: ", JSON.stringify(arr));
      if(arr.length > 0)
      {
         alert("The Ticket Is Already Rejected");
      }
      else 
      { 
        this.rejectService.reject(agent).subscribe(result=>{
          var message: any='Not Available';
          localStorage.setItem('message2',JSON.stringify(message));
          alert('Ticket Rejected');
          console.log(result);
        }, err=>{
          alert('Your are doing something wrong');
          console.log(err);
        })
      }
    });  
  }
}

  
