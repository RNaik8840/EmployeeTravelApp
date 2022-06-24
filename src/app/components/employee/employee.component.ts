import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  ticketForm!: FormGroup;

  constructor(private employeeService:EmployeeService,
    private router:Router)  { }


  ngOnInit(): void {
    this.ticketForm=new FormGroup({
      fromLocation:new FormControl(),
      toLocation:new FormControl(), 
      seats:new FormControl(),
    });
  }
onSubmit(form:NgForm)
{
    this.employeeService.add(form).subscribe(result=>{
      alert('Form Submit');
      console.log(result);
    }, err=>{
      alert('Failed');
      console.log(err);
    })
}
}


