package com.example.employeemanagementnabard.controller;

import com.example.employeemanagementnabard.model.Admin;
import com.example.employeemanagementnabard.model.Employee;
import com.example.employeemanagementnabard.service.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    private final EmployeeServiceImpl employeeServiceImpl;

    @Autowired
    public EmployeeController(EmployeeServiceImpl employeeServiceImpl) {
        this.employeeServiceImpl = employeeServiceImpl;
    }

    @GetMapping("/login")
    public ResponseEntity<Admin> validateLogin(){
        return new ResponseEntity<>(new Admin("Admin Successfully Authenticated!"), HttpStatus.OK);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employees = employeeServiceImpl.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id")Long id){
        Employee employee = employeeServiceImpl.getEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Employee newEmployee = employeeServiceImpl.saveEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id")Long id, @RequestBody Employee employee){
        Employee updateEmployee = employeeServiceImpl.updateEmployee(id, employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable("id")Long id){
        employeeServiceImpl.deleteEmployee(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
