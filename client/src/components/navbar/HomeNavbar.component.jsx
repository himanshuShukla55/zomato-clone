import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [hideNav, setHideNav] = useState(true);
  return (
    <div
      className={`relative z-20 ${
        hideNav ? "text-white" : "text-black bg-white"
      } flex flex-col gap-20 lg:max-w-6xl lg:flex-row lg:items-center`}
    >
      <VscThreeBars
        className="text-2xl lg:hidden mx-3 my-5"
        onClick={() => setHideNav(!hideNav)}
      />
      <ul
        className={`flex flex-col gap-10 text-xl px-3 ${
          hideNav ? "h-0" : "h-screen transition-height duration-500 ease-in"
        }  overflow-hidden sm:text-3xl lg:py-5 lg:h-full lg:flex-row lg:items-center lg:text-[17px] lg:ml-auto`}
      >
        <li>
          <Link to="/">Add Restaurant</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNavbar;
