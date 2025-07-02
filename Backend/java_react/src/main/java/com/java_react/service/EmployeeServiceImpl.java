package com.java_react.service;

import com.java_react.dto.EmployeeDto;
import com.java_react.dto.EmployeeMapper;
import com.java_react.entity.Employee;
import com.java_react.exception.ResourceNotFoundException;
import com.java_react.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public  class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository repo;

    @Override
    public EmployeeDto addEmployee(EmployeeDto dto) {
        Employee saved = repo.save(EmployeeMapper.toEntity(dto));
        return EmployeeMapper.toDto(saved);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        return repo.findAll().stream()
                .map(EmployeeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto dto) {
        Employee existing = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

        existing.setFirstName(dto.getFirstName());
        existing.setLastName(dto.getLastName());
        existing.setEmail(dto.getEmail());

        return EmployeeMapper.toDto(repo.save(existing));
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found"+ id));
        return EmployeeMapper.toDto(employee);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        repo.delete(employee);
    }

}

