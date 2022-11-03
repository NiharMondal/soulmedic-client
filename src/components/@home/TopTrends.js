import React from "react";
import { topTrends, topTrendsTwo } from "../../utils/dummyData/services";
import souldemicApp from '../../assets/soulmedic-app.jpg'
export default function TopTrends() {
   return (
      <React.Fragment>
         <h1>Top Trends - Health Talks</h1>
         <div className=" grid grid-cols-1 lg:grid-cols-2 py-4 text-[#72BCD7] ">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 lg:mb-0 ">
               {topTrends.map((trend, index) => (
                  <p key={index}>
                     <span className="bg-[#787878] text-white px-2 py-1 mr-4 rounded-full">
                        {index + 1}
                     </span>
                     {trend}
                  </p>
               ))}
            </div>
            <div className="grid grid-cols-2 gap-4 ">
               <div className="flex flex-col gap-x-4 gap-y-2">
                  {topTrendsTwo.map((trend, index) => (
                     <p key={index}>
                        <span className="bg-[#787878] text-white px-2 py-1 mr-4 rounded-full">
                           {index + 1}
                        </span>
                        {trend}
                     </p>
                  ))}
               </div>
               <div>
                  <img src={souldemicApp} alt="appPhoto" />
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}
