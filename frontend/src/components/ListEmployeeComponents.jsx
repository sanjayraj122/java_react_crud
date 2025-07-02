import React, { useEffect, useState } from 'react';
import { listEmployees } from '../service/EmployeeService'
import { Navigate, useNavigate } from 'react-router-dom';
const ListEmployeeComponents = () => {
  const [employee, setEmployees] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  function addNewEmployee() {

    navigate('/add-employee');

  }
  return (
    <div className="container">
      <h2 className='text-center'>List of Employees</h2>


      <button
        className='btn btn-primary'
        style={{ marginBottom: "2px" }}
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
        
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email ID</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponents;
