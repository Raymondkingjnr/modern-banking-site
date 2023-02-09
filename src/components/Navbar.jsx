import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[200px] h-[32px]" />

      <ul className=" list-none sm:flex hidden justify-between items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hideen"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;