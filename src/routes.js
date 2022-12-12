import React from "react";
import { useRoutes } from "react-router-dom";
import {
  Appointment,
  Blog,
  Doctors,
  Home,
  Events,
  Contact,
  NotFound,
  BlogDetails,
} from "./pages";
import RootLayout from "./RootLayout/RootLayout";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "doctors", element: <Doctors /> },
        { path: "appointments", element: <Appointment /> },
        { path: "blog", element: <Blog /> },
        { path: "/blog/:topicId", element: <BlogDetails /> },
        { path: "events", element: <Events /> },
        { path: "contact", element: <Contact /> },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);
};

export default Router;
