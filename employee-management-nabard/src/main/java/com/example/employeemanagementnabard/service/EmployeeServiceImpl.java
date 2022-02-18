package com.example.employeemanagementnabard.service;

import com.example.employeemanagementnabard.exception.ResourceAlreadyExistException;
import com.example.employeemanagementnabard.exception.ResourceNotFoundException;
import com.example.employeemanagementnabard.model.Employee;
import com.example.employeemanagementnabard.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return this.employeeRepository.findAll();
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        if (this.employeeRepository.findEmployeeByEmailId(employee.getEmailId()).isPresent())
            throw new ResourceAlreadyExistException("Employee by Email Id - " + employee.getEmailId() + " already exist!");
        else {
            return employeeRepository.save(employee);
        }
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findEmployeeById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee by ID - " + id + " was not found!"));
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Employee updateEmployee = getEmployeeById(id);
        updateEmployee.setFirstName(employee.getFirstName());
        updateEmployee.setLastName(employee.getLastName());
        updateEmployee.setAge(employee.getAge());
        updateEmployee.setGender(employee.getGender());
        updateEmployee.setEmailId(employee.getEmailId());
        updateEmployee.setDept(employee.getDept());
        return employeeRepository.save(updateEmployee);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee = getEmployeeById(id);
        employeeRepository.delete(employee);
    }

    @Override
    public Page<Employee> findPaginated(int pageNo, int pageSize, String sortField, String sortDirection) {
        Sort sort = sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortField).ascending() :
                Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(pageNo - 1, pageSize, sort);
        return employeeRepository.findAll(pageable);
    }
}
