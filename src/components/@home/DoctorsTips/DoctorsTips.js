import React from 'react'
import BookAppointment from './BookAppointment'
import Doctor from './Doctor'

export default function DoctorsTips() {
  return (
     <div className='md:flex lg:container px-4 lg:py-12'>
        <Doctor />
        <BookAppointment/>
    </div>
  )
}
