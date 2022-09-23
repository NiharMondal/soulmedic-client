import { NavLink } from "react-router-dom";
import { NAVLINK } from "../utils/Nav";
export default function Navbar() {
   const activeStyle = {
      background: "#4BBCD7",
      borderRadius: "4px",
      color: "white",
   };
   return (
      <nav className=" border-b-4 border-[#4BBCD7] py-8 sticky top-0 left-0 z-50  bg-white">
         <div className="flex justify-between items-center  md:container">
            <h1>
               SOUL <span className="text-[#4BBCD7]">MEDIC</span>
            </h1>
            <div className="w-1/2">
               <div className="flex justify-around flex-1">
                  {NAVLINK.map((nav, index) => (
                     <NavLink
                        key={index}
                        to={nav.path}
                        style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                        className="px-4 py-2"
                     >
                        {nav.title}
                     </NavLink>
                  ))}
               </div>
            </div>
         </div>
      </nav>
   );
}
