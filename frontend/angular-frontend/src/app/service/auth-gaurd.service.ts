import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.employeeService.isUserLoggedIn())
      return true;

    this.router.navigate(['login-employee']);
    return false;

  }

}