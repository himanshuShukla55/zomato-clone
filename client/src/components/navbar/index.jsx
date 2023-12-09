import React from "react";
import { useLocation } from "react-router-dom";
import HomeNavbar from "./HomeNavbar.component";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return pathname === "/" ? <HomeNavbar /> : <></>;
};

export default Navbar;
