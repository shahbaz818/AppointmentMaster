import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppointment, clearAll } from '../redux/slice';

function AppointmentList() {
    const appointments = useSelector((state) => state.appointments);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteAppointment(id))
    }
    return (
        <>
            <div className='flex items-center flex-col'>
                <h1 className='ml-[40px] mt-[60px] text-bold text-3xl text-blue-800'>Appointment List</h1>
            </div>
            <div className='mt-6'>
                <table className="w-[740px] border-collapse border border-slate-500 ml-8">
                    <thead className="bg-slate-200 border-b border-slate-500">
                        <tr>
                            <th className="border-r border-slate-500">ID</th>
                            <th className="border-r border-slate-500">Name</th>
                            <th className="border-r border-slate-500">Date</th>
                            <th className="border-r border-slate-500">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index + 1}>
                                <td className="border-r border-slate-500">{appointment.id}</td>
                                <td className="border-r border-slate-500">{appointment.name}</td>
                                <td className="border-r border-slate-500">{appointment.date}</td>
                                <td className="border-r border-slate-500">
                                    <button onClick={() => handleDelete(appointment.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <button className='text-2xl text-blue-800 bg-green-400 ml-6 mt-8 w-[200px] h-12 rounded-lg shadow-lg' onClick={() => dispatch(clearAll())}>Clear All Records</button>

            </div>
        </>

    )
}

export default AppointmentList