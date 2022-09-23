import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Doctors, Home,Appointment,Blog,Contact,Events } from "./pages";

export default function App() {
   return (
      <main>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </main>
   );
}
