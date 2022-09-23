import React, { useState } from "react";
import { ACCORDION } from "../../../utils/accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordionLayout = ({
   accordion: { index, title, content },
   activeIndex,
   setActiveIndex,
}) => {
   const handleSetIndex = (index) =>
      activeIndex !== index && setActiveIndex(index);

   return (
      <>
         <div
            onClick={() => handleSetIndex(index)}
            className="flex rounded bg-[#EDEDED] cursor-pointer mb-2 "
         >
            <div className="flex items-center justify-center bg-[#4BBCD7]">
               {activeIndex === index ? (
                  <AiOutlineMinus className="w-10 h-10" />
               ) : (
                  <AiOutlinePlus className="w-10 h-10" />
               )}
            </div>

            <div className="p-2 ml-2">
               <h5>{title}</h5>
               <div>
                  {activeIndex === index && (
                     <div className="bg-[#EDEDED] mb-4 text-slate-500 pt-6">
                        {content}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default function Services() {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <div className="flex flex-col ">
         <h1 className="py-4">FAQ'S</h1>
         {ACCORDION.map((acc, index) => (
            <AccordionLayout
               key={index}
               accordion={acc}
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
         ))}
      </div>
   );
}
