import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor{

  constructor(public employeeService: EmployeeService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')!
        }
      });
    }
    return next.handle(req);
    // // Clone the request to add the new header
    // const clonedRequest = req.clone({ headers: req.headers.append('Authorization', sessionStorage.getItem('basicauth')!) });

    // // Pass the cloned request instead of the original request to the next handle
    // return next.handle(clonedRequest);
  }
}
