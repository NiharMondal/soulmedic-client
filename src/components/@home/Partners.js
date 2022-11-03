import React from 'react'
import { partnerPhoto } from '../../assets/partner/partner'

export default function Partners() {
  return (
     <div className="py-8">
        <h1 className="py-6">Our Partners</h1>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
           {partnerPhoto.map((photo, index) => (
              <div key={index}>
                 <img src={photo} alt="" />
              </div>
           ))}
        </div>
     </div>
  );
}
