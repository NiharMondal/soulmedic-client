import React from 'react'
import doctor from '../../../assets/doctor.jpg'
export default function Doctor() {
  return (
     <div className="w-5/6 md:flex gap-4">
        <div className=' flex justify-center'>
           <img src={doctor} alt="doctorPhoto" />
        </div>
        <div>
           <h6>How to live a healthy lifestyle?</h6>
        </div>
     </div>
  );
}
