import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {addAppointment} from '../redux/slice'

function UpdateRecord({appointment}) {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const dispatch=useDispatch()

    useEffect(()=>{
        if(appointment){
            setName(appointment.name)
            setDate(appointment.date)
        }
    },[appointment])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setName("")
        setDate("")
        const newAppointment = { id: appointment?.id || Date.now(), name, date };
        dispatch(addAppointment(newAppointment))
      
      };

  return (
    <>
    <div className='bg-pink-100 flex justify-center items-center flex-col pt-5 h-full w-full'>
        <h1 className='text-bold text-3xl text-blue-700'>Appointment Management System</h1>
        <div className='flex flex-col mt-10 rounded-lg shadow-xl mb-16 bg-blue-200 h-[500px] w-[800px]'>
            <div className='flex mt-10 ml-10 space-x-28'>
                <h1 className='text-2xl'>Full Name:</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className=" border-2 border-black h-8 w-[400px]"/>
            </div>
            <div className='flex mt-10 ml-10 space-x-[21px]'>
                <h1 className='text-2xl'>Appointment Date:</h1>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className=" border-2 border-black h-8 w-[400px]"/>
            </div>
            <button type="button" onClick={handleSubmit} className='ml-[510px] mt-5 bg-green-400 h-10 w-[150px] rounded-md'>Add Appointment</button>
        </div>
    </div>
    </>
  )
}

export default UpdateRecord