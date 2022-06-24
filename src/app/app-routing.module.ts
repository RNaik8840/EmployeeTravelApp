import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AgentComponent } from './components/agent/agent.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { ManagerComponent } from './components/manager/manager.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TicketrejectComponent } from './components/ticketreject/ticketreject.component';
import { TicketstatusComponent } from './components/ticketstatus/ticketstatus.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'employees', component:EmployeeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'', component:FirstpageComponent},
  {path:'registrations', component:RegistrationComponent},
  {path:'users', component:UserComponent},
  {path:'managers', component:ManagerComponent},
  {path:'agents', component:AgentComponent},
  {path:'accepts', component:TicketstatusComponent},
  {path:'rejects', component:TicketrejectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
