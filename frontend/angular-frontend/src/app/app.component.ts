import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Employee Management Portal';

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
      
  }
}
