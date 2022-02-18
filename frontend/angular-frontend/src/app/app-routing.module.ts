import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLogoutComponent } from './employee-logout/employee-logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent, canActivate:[AuthGaurdService] },
  {path: 'create-employee', component: CreateEmployeeComponent, canActivate:[AuthGaurdService] },
  {path: 'login-employee', component: EmployeeLoginComponent},
  {path: 'logout-employee', component: EmployeeLogoutComponent, canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'login-employee', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate:[AuthGaurdService] },
  {path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
