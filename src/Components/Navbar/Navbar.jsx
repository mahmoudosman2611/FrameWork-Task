import { Link, NavLink } from "react-router";

import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-[#2C3E50] shadow py-4 ">
        <div className="container py-4 flex items-center justify-between px-4">
          <h1>
            <Link
              className="text-3xl text-white font-bold capitalize "
              to="/Home"
            >
              START FRAMEWORK
            </Link>
          </h1>

          <ul
            className={`md:flex lg:gap-8 gap-4 group space-y-0 ${
              menuOpen
                ? "flex flex-col absolute top-20 left-0 w-full bg-[#2C3E50] px-4 py-4 z-50"
                : "hidden"
            } md:static md:flex-row md:w-auto md:bg-transparent`}
          >
            <li className="">
              <NavLink
                to="/Home"
                className=" text-white font-semibold transition-colors duration-300 px-3 py-2 "
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/About"
                className=" text-white font-semibold transition-colors duration-300 px-3 py-2 "
              >
                ABOUT
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/Portoflio"
                className=" text-white font-semibold transition-colors duration-300 px-3 py-2 "
              >
                PORTOFLIO
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/Contact"
                className=" text-white font-semibold transition-colors duration-300 px-3 py-2 "
              >
                CONTACT
              </NavLink>
            </li>
          </ul>

          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
