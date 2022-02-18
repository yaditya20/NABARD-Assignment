import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-logout',
  templateUrl: './employee-logout.component.html',
  styleUrls: ['./employee-logout.component.css']
})
export class EmployeeLogoutComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.logOut();
    this.router.navigate(['login-employee'])
  }

}
