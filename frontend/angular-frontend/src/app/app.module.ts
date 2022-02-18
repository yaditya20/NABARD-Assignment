import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLogoutComponent } from './employee-logout/employee-logout.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeLoginComponent,
    EmployeeLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, 
      useClass: BasicAuthHttpInterceptorService, 
      multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
