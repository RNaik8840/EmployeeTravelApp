import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './components/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AgentComponent } from './components/agent/agent.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { DatePipe } from '@angular/common';
//import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { TicketstatusComponent } from './components/ticketstatus/ticketstatus.component';
import { TicketrejectComponent } from './components/ticketreject/ticketreject.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AboutUsComponent,
    RegistrationComponent,
    UserComponent,
    ManagerComponent,
    AgentComponent,
    FirstpageComponent,
    TicketstatusComponent,
    TicketrejectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
 /* providers: [DatePipe,{
    provide: HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true
  }
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
