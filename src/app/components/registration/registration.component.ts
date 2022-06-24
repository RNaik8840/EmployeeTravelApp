import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private registrationService:RegistrationService,
    private router:Router)  { }


  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      FirstName:new FormControl(),
      LastName:new FormControl(), 
      Password:new FormControl(),
      EmailId:new FormControl(),
      MobileNo:new FormControl()
    });
  }
onSubmit(form:NgForm)
{
    this.registrationService.add(form).subscribe(result=>{
      alert('Form Submit');
      console.log(result);
      this.router.navigate(['']);
    }, err=>{
      alert('Failed');
      console.log(err);
    })
  
}

}
