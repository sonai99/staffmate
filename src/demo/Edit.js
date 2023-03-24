import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };
        //when id matches the employee id to edit, it just adds new "employee" data using the splice method in JavaScript
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div class="ml-7 mr-7 mb-2">
            <form onSubmit={handleUpdate}>
                <h1 class="mb-4 text-2xl font-bold text-blue-500">Edit Employee</h1>
                <label htmlFor="firstName" class="block mb-2 text-sm font-medium">First Name</label>
                <input
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName" class="block mb-2 text-sm font-medium">Last Name</label>
                <input
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email" class="block mb-2 text-sm font-medium">Email</label>
                <input
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salary" class="block mb-2 text-sm font-medium">Salary ($)</label>
                <input
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date" class="block mb-2 text-sm font-medium">Date</label>
                <input
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div >
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2">Update</button>
                    <button onClick={() => setIsEditing(false)} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2">Cancel</button>
                   
                    {/* <input type="submit" value="Update" />
                    <input
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    /> */}
                </div>
            </form>
        </div>
    );
}

export default Edit
