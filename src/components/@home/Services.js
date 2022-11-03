import React from "react";
import { ourServices } from "../../utils/dummyData/services";

const OurService = ({ service: { title, subtitle, icon } }) => {
   return (
      <div className="w-full text-center">
         <div className="text-[#0390B2] text-6xl  w-1/6 mx-auto">{icon}</div>
         <h2>{title}</h2>
         <p className="text-slate-500">{subtitle}</p>
      </div>
   );
};

export default function Services() {
   return (
      <section className=" py-20">
         <div className=" grid grid-cols-1  gap-4 sm:grid-cols-3">
            {ourServices.map((sr, index) => (
               <OurService service={sr} key={index} />
            ))}
         </div>
      </section>
   );
}
