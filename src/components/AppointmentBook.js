import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import health_check_up from '../assets/appointment.jpg'
import AppointDetails from './AppointDetails';


function AppointmentBook() {
  return (
    <div className="text-slate-500">
      <AppointDetails/>
      <div className="py-8">
        <h2>After Booking</h2>
        <p className="text-sm py-4">
          Hi fill in the details and submit the form. We will contact you via
          phone or email and fix a time schedule.
        </p>
        <p className="font-semibold italic pb-4">
          These are the thing you need to carry with you when you come in for
          the appointment wit the doctor.
        </p>
        <ul>
          <li className="flex items-center leading-loose">
            <MdKeyboardArrowRight />{" "}
            <span className="ml-4 text-base">Previous Medical History</span>{" "}
          </li>
          <li className="flex items-center leading-loose">
            <MdKeyboardArrowRight />{" "}
            <span className="ml-4 text-base">Enlisted Previous Numbers</span>{" "}
          </li>
          <li className="flex items-center leading-loose">
            <MdKeyboardArrowRight />{" "}
            <span className="ml-4 text-base">Discussion with Parents</span>{" "}
          </li>
          <li className="flex items-center leading-loose">
            <MdKeyboardArrowRight />{" "}
            <span className="ml-4 text-base">
              Make sure you are feeling good
            </span>{" "}
          </li>
          <li className="flex items-center leading-loose">
            <MdKeyboardArrowRight />{" "}
            <span className="ml-4 text-base">Have someone eith you</span>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h5 className='pb-6'>Have a healty life!</h5>
        <img alt="Heath_check_up" src={health_check_up} />
      </div>
    </div>
  );
}

export default AppointmentBook