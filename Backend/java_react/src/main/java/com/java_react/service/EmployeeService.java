package com.java_react.service;

import com.java_react.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto addEmployee(EmployeeDto dto);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long id, EmployeeDto dto);

    EmployeeDto getEmployeeById(Long id);
    void deleteEmployee(Long id);

}

