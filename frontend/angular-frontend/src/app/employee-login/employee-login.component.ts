import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  username!: string;
  password!: string;
  errorMessage!: 'Invalid Credentials!';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  checkLogin() {
    (this.employeeService.authenticate(this.username, this.password).subscribe(data => {
        this.goToEmployeeList();
        this.invalidLogin = false;
      }, error => {
        this.invalidLogin = true
      }));
  }

  doLogin() {
    this.employeeService.adminLogin(this.username, this.password).subscribe(data => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      this.goToEmployeeList();
    }, error => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      console.log(error);
    });
  }

}
