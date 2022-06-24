/*import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userInfo=this.userService.getUser() as User;
    if(userInfo!=null){
      request = request.clone({
        setHeaders:{Authorization: `Bearer ${userInfo.token}`}
      });
    }
    return next.handle(request);
  }
}*/
