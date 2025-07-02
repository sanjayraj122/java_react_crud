
import React, { useState } from 'react'

const EmployeeComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')

    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        console.log('employee => ' + JSON.stringify(employee));
       
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Employee</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input 
                                    placeholder='First Name' 
                                    name='firstName' 
                                    className='form-control' 
                                    value={firstName} 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                />
                            </div>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input 
                                    placeholder='Last Name' 
                                    name='lastName' 
                                    className='form-control' 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} 
                                />
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input 
                                    placeholder='Email' 
                                    name='email' 
                                    className='form-control' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <button className='btn btn-success' onDoubleClick={saveEmployee}>save employeee</button>
                        </form>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
  )
}

export default EmployeeComponent