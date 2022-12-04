import React from "react";
import { CHEIF_DOCTORS, G_DOCTOR } from "../utils/dummyData/doctor";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Table } from "./Table";


const OurDoctor = ({ doctor }) => {
  return (
    <div className="flex gap-4">
      <img
        src={doctor.pictur}
        alt="Chief_doctors"
        className="h-[50px] lg:h-[100px] ring-4 ring-[#0390B2] rounded-full"
      />
      <div className="text-slate-400">
        <p className="h-10 flex items-center font-bold text-slate-800 bg-[#EDEDED]  w-full">
          <span className="bg-[#0390B2] text-white  p-3 mr-3">
            {doctor.icon}
          </span>
          <span>{doctor.name}, </span>
          <span className="text-slate-400 ml-1">MBBS</span>
        </p>
        <p className=" py-5 border-b">{doctor.info}</p>
        <p>{doctor.sector}</p>
        <p>
          Email: <span className="text-[#0390B2]">{doctor.email}</span>
        </p>
        <ul className="flex gap-4 py-8 list-none">
          <li className="ring-2 ring-gray-300 rounded-full p-3 hover:bg-[#4bbcd7] hover:ring-[#4bbcd7] hover:text-white hover:cursor-pointer text-xl">
            <FaTwitter />
          </li>
          <li className="ring-2 ring-gray-300 rounded-full p-3 text-xl hover:bg-[#1773ea]  hover:ring-[#1773EA] hover:text-white hover:cursor-pointer">
            <FaFacebookF />
          </li>
          <li className="ring-2 ring-gray-300 rounded-full p-3 text-xl hover:bg-red-700 hover:ring-red-700 hover:text-white hover:cursor-pointer">
            <AiOutlineGooglePlus />
          </li>
          <li className="ring-2 ring-gray-300 rounded-full p-3 text-xl hover:bg-[#0073B1] hover:ring-[#0073B1] hover:text-white hover:cursor-pointer">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </div>
  );
};

function Doctor() {
  return (
    <React.Fragment>
      <h1 className="py-6">Our Chief Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {CHEIF_DOCTORS.map((doctor, index) => (
          <OurDoctor doctor={doctor} key={index} />
        ))}
      </div>

      <h1 className="py-6">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {G_DOCTOR.map((doctor, index) => (
          <OurDoctor doctor={doctor} key={index} />
        ))}
      </div>
      <Table/>
    </React.Fragment>
  );
}

export default Doctor;
