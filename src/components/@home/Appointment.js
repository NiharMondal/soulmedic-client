import React from "react";
import { FaUserMd  } from "react-icons/fa";
export default function Appointment() {
   return (
      <div>
         <h2 className="flex items-center bg-[#4BBCD7] px-4 text-white">
            <span className="mr-3">
               <FaUserMd />
            </span>
            Book an Appointment
         </h2>
         <div className="p-6">
            <form >
               <select
                  name="diff"
                  id="diff"
                  className=" p-3 w-full bg-[#fafafa] mb-3 focus:outline-none cursor-pointer text-slate-400"
               >
                  <option name="" id="diff">
                     Select Department
                  </option>
                  <option name="" id="">
                     Gynacelogy
                  </option>
                  <option name="" id="">
                     Blood Bank
                  </option>
                  <option name="" id="">
                     Opthalmology
                  </option>
                  <option name="" id="">
                     Oncology
                  </option>
               </select>
               <input
                  type="text"
                  placeholder="Your First Name (required)"
                  className="p-3 w-full bg-[#fafafa] mb-3 focus:outline-none"
               />
               <input
                  type="text"
                  placeholder="Your Last Name "
                  className="p-3 w-full bg-[#fafafa] mb-3 focus:outline-none"
               />
               <input
                  type="text"
                  placeholder="Phone Number (required)"
                  className="p-3 w-full bg-[#fafafa] mb-3 focus:outline-none"
               />
               <input
                  type="email"
                  placeholder="Your Email (required)"
                  className="p-3 w-full bg-[#FAFAFA] mb-3 focus:outline-none"
               />
               <input
                  type="date"
                  className="p-3 w-full bg-[#FAFAFA] mb-3 focus:outline-none text-slate-400"
               />
               <div className="flex justify-end pt-4">
                  <button
                     type="submit"
                     className="bg-[#4BBCD7] px-6 py-3 text-white rounded"
                  >
                   
                     SUBMIT
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
