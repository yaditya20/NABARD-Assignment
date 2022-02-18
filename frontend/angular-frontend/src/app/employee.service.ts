import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './employee';

export class Admin{
  constructor(public status:string) {} 
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  private baseLoginURL = "http://localhost:8080/api/v1/login";

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Admin>(`${this.baseLoginURL}`,{headers}).pipe(
     map(
       data => {
        sessionStorage.setItem('username',username);
        let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);  
        return data;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }


  adminLogin(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(username+ ":"+password)});
    return this.httpClient.post(`${this.baseLoginURL}`, {headers, responseType:'text' as 'json'});
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
