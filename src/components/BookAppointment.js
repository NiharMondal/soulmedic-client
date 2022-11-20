import React from 'react'
import {FaPhone} from 'react-icons/fa'
import {FiEdit2} from 'react-icons/fi'
import {MdOutlineMail} from 'react-icons/md'

export const BookAppointment = ({text}) => {
  return (
    <div className="text-slate-500 pt-5">
      <h5 className="py-4 text-gray-700">Book an Appintment</h5>
      <p className="text-sm pb-2">
        {text}
      </p>
      <div className="grid grid-rows-3 py-4 gap-y-2">
        <p className="flex items-center h-10 bg-[#EDEDED]">
          <span className="bg-[#0390B2] text-white  p-3 mr-3 ">
            <FaPhone />
          </span>
          Phone: +12002582145{" "}
        </p>
        <p className="flex items-center h-10 bg-[#EDEDED]">
          <span className="bg-[#0390B2] text-white  p-3 mr-3 ">
            <MdOutlineMail />
          </span>
          Phone: +12002582145{" "}
        </p>
        <p className="flex items-center h-10 bg-[#EDEDED]">
          <span className="bg-[#0390B2] text-white  p-3 mr-3 ">
            <FiEdit2 />
          </span>
          Online Form:{" "}
          <span className="text-[#0390b2] ml-2"> Fill out this form</span>
        </p>
      </div>
    </div>
  );
}
