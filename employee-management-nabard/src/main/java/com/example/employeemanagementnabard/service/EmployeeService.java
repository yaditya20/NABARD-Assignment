package com.example.employeemanagementnabard.service;

import com.example.employeemanagementnabard.model.Employee;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee saveEmployee(Employee employee);
    Employee getEmployeeById(Long id);
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
    Page<Employee> findPaginated(int pageNo, int pageSize, String sortField, String sortDirection);
}
