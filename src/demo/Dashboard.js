import React, { useState } from 'react'
import { employeesData } from '../data/Data';
import Swal from 'sweetalert2';
import List from './List';
import Header from './Header';
import Add from './Add';
import Edit from './Edit';


function Dashboard() {

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) =>{
    // console.log('Add id',id);
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  }

  const handleDelete = (id) => {
    // console.log('Delete id',id);

    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then(result => {
        if (result.value) {

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${employees.firstName} ${employees.lastName}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
            });
            setEmployees(employees.filter(employees => employees.id !== id));
        }
    });
}


  return (
    <div class='bg-[#f8fafc]'>
      {/* list */}
      {!isAdding && !isEditing && (
        <>
        <Header setIsAdding={setIsAdding}/>
        <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />
      )}
      {/* Edit */}
      {isEditing && (
        <Edit employees={employees} selectedEmployee={selectedEmployee} setEmployees={setEmployees} setIsEditing={setIsEditing} />
      )}
    </div>
  )
}

export default Dashboard
