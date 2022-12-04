import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer/Footer";
import { Doctors, Home,Appointment,Blog,Contact,Events } from "./pages";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
   return (
      <main>
         <CustomNavbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:topicId" element={<BlogDetails />} />

            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
         <Footer/>
      </main>
   );
}
