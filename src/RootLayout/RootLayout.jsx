import React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer/Footer";
export default function RootLayout() {
  return (
    <React.Fragment>
      <CustomNavbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
