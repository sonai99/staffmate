import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    return (
        <div class='relative overflow-x-auto ml-4'>
            <table class="w-full text-sm text-left">
                <thead class="text-xs uppercase">
                    <tr>
                        <th class="px-6 py-3 border-b">No.</th>
                        <th class="px-6 py-3 border-b">First Name</th>
                        <th class="px-6 py-3 border-b">Last Name</th>
                        <th class="px-6 py-3 border-b">Email</th>
                        <th class="px-6 py-3 border-b">Salary</th>
                        <th class="px-6 py-3 border-b">Date</th>
                        <th class="px-6 py-3 border-b" colSpan={2} >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr class="bg-[#f8fafc]" key={employee.id}>
                                <td class="px-6 py-4 border-b">{i + 1}</td>
                                <td class="px-6 py-4 border-b">{employee.firstName}</td>
                                <td class="px-6 py-4 border-b">{employee.lastName}</td>
                                <td class="px-6 py-4 border-b">{employee.email}</td>
                                <td class="px-6 py-4 border-b">{employee.salary}</td>
                                <td class="px-6 py-4 border-b">{employee.date} </td>
                                <td class="px-6 py-4 border-b">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left border-b">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List