/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NAVLINK } from "../utils/Nav";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomNavbar() {
  const [nav, setNav] = useState(true);

  const changeSize = () => {
    if (window.scrollY >= 100) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  window.addEventListener("scroll", changeSize);
  const activeStyle = {
    background: "#4BBCD7",
    borderRadius: "4px",
    color: "white",
  };
  return (
    <Disclosure
      as="nav"
      className={`border-b-4 border-[#4BBCD7]  ${nav? "py-2 lg:py-6":'py-1 lg:py-2'} sticky top-0 left-0 z-50  bg-white`}
    >
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#4BBCD7] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiOutlineMenuAlt1
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-between items-center container ">
                <div className="flex items-center">
                  <h1>
                    <Link to="/">
                      SOUL <span className="text-[#4BBCD7]">MEDIC</span>
                    </Link>
                  </h1>
                </div>
                <div className="hidden lg:block sm:ml-6  ">
                  <div className="flex flex-1 space-x-4">
                    {NAVLINK.map((nav, index) => (
                      <NavLink
                        key={index}
                        to={nav.path}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        className="px-4 py-2 hover:bg-[#4BBCD7] hover:rounded ease-in duration-300 text-[34bbcd7]"
                      >
                        {nav.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {NAVLINK.map((nav, index) => (
                <Disclosure.Button
                  as={NavLink}
                  key={index}
                  to={nav.path}
                  className={classNames(
                    nav.current
                      ? "bg-white text-[#4BBCD7]"
                      : "text-black hover:bg-[#4BBCD7] hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium ease-in duration-300"
                  )}
                  aria-current={nav.current ? "page" : undefined}
                >
                  {nav.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
