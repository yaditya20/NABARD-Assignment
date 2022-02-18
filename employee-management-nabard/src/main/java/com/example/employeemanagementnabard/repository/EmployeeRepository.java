package com.example.employeemanagementnabard.repository;

import com.example.employeemanagementnabard.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findEmployeeById(long id);
    Optional<Employee> findEmployeeByEmailId(String emailId);
}
