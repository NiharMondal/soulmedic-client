import React from 'react'
import doctorAvatar from '../assets/doctor.jpg'
import { healthyLifeList } from '../utils/dummyData/healthyLifeList';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Appointment from './@home/Appointment';
const HealthTips = ({ advice }) => {
   return (
      <div className='py-1'>
         <p className="flex items-center" >
            {" "}
            <span className='mr-4 text-black'>
               {" "}
               <BsFillArrowRightCircleFill />{" "}
            </span>{" "}
            {advice.advice}{" "}
         </p>
      </div>
   );
}

export default function DoctorsTips() {
  return (
     <div className="px-4 xl:container grid grid-cols-1 lg:grid-cols-3 gap-4 py-12 items-end">
        <div className="flex items-end justify-center">
           <div>
              <h6 className='pb-8'>Todays Tips from Dr.Drew Stronghold</h6>
              <img src={doctorAvatar} alt="doctorAvatar" />
           </div>
        </div>
        <div className="pt-6">
           <h6>How to live a healthy lifestyle?</h6>
           <div className="pt-4 text-slate-500">
              <p className="py-4">
                 Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                 fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                 Sed consequat, leo eget bibendum sodales, augue velit cursus
                 nunc, quis gravida magna mi a libero. Etiam sit amet orci eget
                 eros faucibus tincidunt. Duis leo.
              </p>
              {healthyLifeList.map((item, index) => (
                 <HealthTips advice={item} key={index} />
              ))}
              <p className="pt-4">
                 Donec sodales sagittis magna. Sed consequat, leo eget bibendum
                 sodales, augue velit cursus nunc, quis gravida magna mi a
                 libero. Etiam sit amet orci eget eros faucibus
              </p>
           </div>
        </div>
        <div className="bg-[#F2F2F2]">
           <Appointment />
        </div>
     </div>
  );
}
