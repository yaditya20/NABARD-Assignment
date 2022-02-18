import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();

  // gender: String[] = [
  //   'Male',
  //   'Female'
  // ];

  // dept: String[] = [
  //   'Product Development',
  //   'HR',
  //   'Admin',
  //   'Accounts'
  // ];

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

}
