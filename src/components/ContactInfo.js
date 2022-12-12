import React from "react";
import { contactInfo } from "../utils/dummyData/services";

export const ContactInfo = ({ header, color }) => {
  return (
    <div className="text-gray-500">
      <h2 className={` before:absolute before:bg-gray-200 before:h-px before:w-1/3 before:bottom-0 relative pb-2 ${color? `text-gray-${color}`: 'text-gray-700'}`}>
        {header}
      </h2>
      <div className="grid grid-cols-1 divide-y mt-8">
        {contactInfo.map((contact, index) => (
          <p key={index} className="flex items-center py-3">
            <span className="mr-4 text-lg ">{contact.icon}</span>
            {contact.contact}
          </p>
        ))}
      </div>
    </div>
  );
};
