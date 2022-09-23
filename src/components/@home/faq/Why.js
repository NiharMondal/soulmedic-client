import { whyUsData } from "../../../utils/dummyData/whyUs";
const Info = ({ data }) => {
   return (
      <div className="flex gap-4 mb-3 px-2 group">
         <div className="w-[100px] h-[100px] flex items-center justify-center   ">
            <div className=" bg-[#4BBCD7] text-white text-5xl rounded-full border-4 border-[#0390B2] p-5 ">
               <div className="group-hover:animate-bounce opacity-100 group-hover:opacity-90">{data.icon} </div>
            </div>
         </div>
         <div>
            <h5>{data.title}</h5>
            <p className="text-slate-500">{data.subtitle}</p>
         </div>
      </div>
   );
};
export default function Why() {
   return (
      <div className="w-full">
         <h1 className="py-4">Why Us?</h1>
         <div className="flex flex-col">
            {whyUsData.map((data, index) => (
               <Info data={data} key={index} />
            ))}
         </div>
      </div>
   );
}
