import React from "react";
import { BookAppointment } from "../components/BookAppointment";
import MessageBox from "../components/Contact/MessageBox";
import { ContactInfo } from "../components/ContactInfo";

import Map from "../components/Map";

const containerStyle = {
  width: "100%",
  height: "550px",
};
const text =
  "Fox that is her thing smaoasa lase lemedds laasd pamade eleifend sapien. Lase lemedds laasd pamade eleifend sapien.";

export default function Contact() {
  return (
    <div className="container mx-auto py-12 ">
      <div className="pb-4">
        <Map containerStyle={containerStyle}  />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 py-6">
        <div className="col-span-2">
          <MessageBox />
        </div>
        <div>
          <ContactInfo header="Contact Info" />
          <BookAppointment text={text} />
        </div>
      </div>
    </div>
  );
}
