import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl(),
      userType:new FormControl()
      });
  }
  onSubmit(form:NgForm)
{
    this.userService.add(form).subscribe(result=>{
      alert('Form Submit');
      console.log(result); 
      localStorage.setItem('userInfo',JSON.stringify(result));
      /*if(result.role=="Employee")
   {
    this.router.navigate(['/employees']);
   }
   else if(result.role=="Manager")
    {
    this.router.navigate(['/managers']);
    }
    else if(result.role=="Agent")
    {
   this.router.navigate(['/agents']);
    }
   /*else 
   {
    this.router.navigate(['/admins']);
   }
  }, err=>{
     console.log(err);
     alert("login failed");
  })
 }*/

      if(result.userType=="employee")
      {
      this.router.navigate(['/employees']);
    } 
    else if(result.userType=="manager")
    { 
      this.router.navigate(['/managers']);
    }
    else if(result.userType=="agent")
    { 
      this.router.navigate(['/agents']);
    }
    else 
    {
      this.router.navigate(['']);
    }
    }, err=>{
      alert('Failed');
      console.log(err);
    })
  }
}
  
