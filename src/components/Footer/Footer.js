import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import blogPicture from "../../assets/blog-new-8.jpg";
import {  healthData } from "../../utils/dummyData/services";
import { ContactInfo } from "../ContactInfo";
import Map from "../Map";

const containerStyle = {
  width: "100%",
  height: "300px",
};


export default function Footer() {
  return (
    <div className=" pt-12 text-slate-500 bg-[#F6F6F6]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4 container mx-auto">
        <div className="flex flex-col">
          <h2 className=" before:absolute before:bg-gray-200 before:h-px before:w-1/3 before:bottom-0 relative pb-2">
            HEALTH SOLUTIONS
          </h2>
          <div className="mt-4">
            {healthData.map((data, index) => (
              <p key={index} className="flex items-center py-1">
                <span className="mr-3">
                  {" "}
                  <BsArrowUpRightSquareFill />{" "}
                </span>{" "}
                {data}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className=" before:absolute before:bg-gray-200 before:h-px before:w-1/3 before:bottom-0 relative pb-2">
            RECENT POSTS
          </h2>
          <div className="pt-8">
            <img
              className="float-left mr-2 mb-2"
              src={blogPicture}
              alt="Smileyface"
            />

            <h6>Proin fermentum...</h6>
            <p>
              Proin lobortis tempus odio eget venenatis. Proin fermentum ut
              massa at bibendum. Proin bibendum...
            </p>
          </div>
          <div className="grid grid-flow-col auto-cols-auto divide-x border border-gray-300 py-2 mt-4">
            <div className="flex items-center justify-center">
              <FaUserAlt /> <span className="ml-2 text-[#6FCBE9]">Ram</span>
            </div>
            <div className="flex items-center justify-center">
              <FaRegCalendarAlt /> <span className="ml-2">Nov 22 2013</span>
            </div>
            <div className="flex items-center justify-center">
              <TbMessages /> <span className="ml-2">1</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" before:absolute before:bg-gray-200 before:h-px before:w-1/3 before:bottom-0 relative pb-2">
            LOCATION MAP
          </h2>
          <div className="mt-8">
            <Map containerStyle={containerStyle} />
          </div>
        </div>
        <ContactInfo header="CONTACT INFO" t_color="500" />
      </div>
      <div className="py-4 border-t-2 border-gray-200 md:flex md:justify-center">
        Copyright © {new Date().getFullYear()} Soulmedic Theme All Rights
        Reserved | <span className="text-[#6FCBE9]">Nihar Mondal</span>
      </div>
    </div>
  );
}
