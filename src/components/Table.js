import React from 'react'
import { FaUserMd } from "react-icons/fa";



const Button = ()=>{
   return (
     <p className="text-center px-2 py-1 border border-[#0390B2] text-[#0390B2] hover:bg-[#0390B2] hover:text-white hover:underline hover:cursor-pointer hover:ease-in hover:duration-300 text-xs md:text-sm">
       CLICK
     </p>
   );
}
export const Table = () => {
  return (
    <div className="pb-12">
      <h1 className="py-4">Physicians List</h1>

      <table className="table-fixed md:table-auto w-full border ">
        <thead className="text-left text-slate-500 text-xs md:text-base bg-gray-300">
          <tr className="border-b">
            <th className="pl-2 py-4">DOCTORS NAME</th>
            <th className="py-4">CODE</th>
            <th className="py-4">DEPARTMENT</th>
            <th className="py-4">EXTENTION NUMBER</th>
            <th className="py-4">APPOINTMNET</th>
          </tr>
        </thead>
        <tbody className="text-xs md:text-base">
          <tr className="border-b">
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              James Horner
            </td>
            <td className="py-3">S005</td>
            <td className="py-3">Blood Bank</td>
            <td className="py-3">2231</td>
            <td className="py-3 pr-2">
               <Button/>
            </td>
          </tr>
          <tr className="border-b bg-gray-100">
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              Steve Bucami
            </td>
            <td>S001</td>
            <td>Nephrology</td>
            <td>2244</td>
            <td className='pr-2'>
               <Button/>
            </td>
          </tr>
          <tr className="border-b ">
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              David James
            </td>
            <td>S002</td>
            <td>Opthalmology</td>
            <td>5644</td>
            <td className='pr-2'>
               <Button/>
            </td>
          </tr>
          <tr className="border-b bg-gray-100">
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              Mc Horner
            </td>
            <td>S003</td>
            <td>Oncology</td>
            <td>6543</td>
            <td className='pr-2'>
                <Button/>
            </td>
          </tr>
          <tr>
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              Lewis James Stefen
            </td>
            <td>S010</td>
            <td>Anaesthetist</td>
            <td>7745</td>
            <td className='pr-2'> <Button/> </td>
          </tr>
          <tr className="border-b bg-gray-100">
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              Carrie Holmes
            </td>
            <td>S011</td>
            <td>Cardio Thoracic</td>
            <td>9965</td>
            <td className='pr-2'> <Button/> </td>
          </tr> 
          <tr>
            <td className="py-3 pl-2 flex items-center">
              <span className="mr-2 text-[#0390B2]">
                <FaUserMd />{" "}
              </span>
              James Gandolfini
            </td>
            <td>S017</td>
            <td>Gynaecology</td>
            <td>5604</td>
            <td className="pr-2">
             <Button/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
