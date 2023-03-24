import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        //need to fill all input fields
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        //giving new id to new employee datd
        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee); //push new employee in previous dataset
        setEmployees(employees);    //change state
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div class="ml-7 mr-7 mb-2">
            <form onSubmit={handleAdd}>
                <h1 class="mb-4 text-2xl font-bold text-blue-500">Add Employee</h1>
                <label htmlFor="firstName" class="block mb-2 text-sm font-medium">First Name</label>
                <input
                    class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                <label htmlFor="salary" class="block mb-2 text-sm font-medium">Salary</label>
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
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2" >Add</button>
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2" onClick={() => setIsAdding(false)}>Cancel</button>
                    
                    {/* <input type="submit" value="Add" />
                    <button
                        class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    /> */}
                </div>
            </form>
        </div>
    );
}

export default Add
