import React from "react";
import { BLOG_DATA } from "../../utils/dummyData/blog";
import { BiMessageRounded } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
const BlogDetails = ({ blog: { title, icon, subtitle, photo } }) => {
   return (
      <div className="flex">
         <div className="flex items-center flex-col  divide-y divide-slate-300 w-[100px] md:h-[147px] border-x">
            <p className="text-2xl text-[#56BDD7]  p-2">{icon}</p>
            <p className="flex flex-col p-2">
               Nov 22 <span>2022</span>{" "}
            </p>
            <p className="flex justify-center items-center w-full bg-[#56BDD7] p-2 rounded-b-lg text-white">
               <BiMessageRounded /> <span>1</span>
            </p>
         </div>
         <div className="ml-2">
            <img src={photo} alt="Blog_photo" className="h-[200px]" />
            <h5 className="mt-4">{title}</h5>
            <div className="flex gap-x-10">
               <p className="flex items-center">
                  
                  <FaUserAlt /> <span> Ram</span>{" "}
               </p>
            </div>
         </div>
      </div>
   );
};
export default function Blog() {
   return (
      <div className="">
         <h1>From the Blog</h1>
         <div className="md:flex gap-4 py-8">
            {BLOG_DATA.map((blog, index) => (
               <BlogDetails blog={blog} key={index} />
            ))}
         </div>
      </div>
   );
}
