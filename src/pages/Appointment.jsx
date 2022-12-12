import React from 'react'
import AppointmentBook from '../components/AppointmentBook'
import AppointmentForm from '../components/AppointmentForm'

export default function Appointment() {
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8  py-12'>
      <div className='col-span-2'>
        <AppointmentForm/>
      </div>
      <div>
        <AppointmentBook/>
      </div>
    </div>
  )
}
