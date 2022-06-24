import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { AgentService } from 'src/app/services/agent.service';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  ticketList!: Employee[];
  constructor(private ticketlistService:ManagerService,private agentService:AgentService,private router:Router) { }
  ngOnInit(): void {
    this.ticketlistService.getTicketList().subscribe(employee=>{
      this.ticketList = employee;
      console.log(employee);
    },err=>{
      console.log(err);
    });
  }
  reject(Id:number){
    this.ticketlistService.remove(Id).subscribe(result=>{
    alert('Ticket is Rejected');
    this.ngOnInit();
    }, error => {
      alert("Some error occurred: " + JSON.stringify(error));
    });
}
accept(employee:Employee)
  {
    this.agentService.getAgentList().subscribe(response => {
      let arr: any = [];
      response.forEach((item) => {
        if(item.id == employee.id){
          console.log("matching: ", item.id , " == ", employee.id);
          arr.push(item);
        }
      })
      console.log("arr: ", JSON.stringify(arr));
      if(arr.length > 0)
      {
         alert("The Ticket Is Already Approved");
      }
      else
      {
        this.agentService.add(employee).subscribe(result=>{
          alert('Ticket Approved.');
          console.log(result);
        }, err=>{
          alert('Your are doing something wrong.');
          console.log(err);
        })
      }
    });  
  }
}
