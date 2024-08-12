import React, { useEffect, useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import arrowRighgt from "../assets/images/svg/arrow-right.svg";
import { NAVBAR_LIST } from "../utils/helper";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    if (openNav) {
      document.body.classList.add("max-md:overflow-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-hidden");
    }
  }, [openNav]);
  return (
    <nav className="bg-white relative z-[100] overflow-x-clip backdrop-blur-lg bg-opacity-[6%] drop-shadow-sm">
      <div className="xl:max-w-[1280px] xl:px-0 max-md:py-5 container">
        <div className="flex justify-between items-center">
          <a href="#">
            <img
              src={logo}
              className="md:w-[154px] block w-[122px] h-9  md:h-12"
              alt="logo"
            />
          </a>
          <ul
            className={`flex justify-center items-center duration-300 max-md:fixed top-0 max-md:bg-black max-md:justify-center max-md:flex-col max-md:min-h-screen max-md:w-full z-[100] ${
              openNav ? "right-0" : "-right-[110%]"
            }`}
          >
            {NAVBAR_LIST.map((obj, i) => (
              <li key={i}>
                <a
                  aria-label={obj.name}
                  onClick={() => setOpenNav(false)}
                  href={obj.url}
                  className="font-saira text-base max-md:hover:text-black text-white h-full block lg:py-[27px] py-6 px-3 lg:px-4 duration-300 hover:bg-gray-light hover:bg-opacity-50 !leading-[157%]"
                >
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-3">
            <button className="font-saira font-medium group text-base lg:text-md capitalize flex gap-[7px] justify-center items-center text-white px-4 py-1.5 !leading-[157%] bg-less-blue rounded-[259px]">
              <span className="text_shadow">Find More</span>
              <img
                src={arrowRighgt}
                alt="arrowRighgt"
                className="backdrop-blur-md w-2 lg:w-2.5 h-3 lg:h-[15px] duration-300 group-hover:translate-x-0.5"
              />
            </button>
            <div
              className="w-6 h-[18px] relative flex flex-col justify-between z-[101] md:hidden cursor-pointer"
              onClick={() => setOpenNav(!openNav)}
            >
              <span
                className={`block w-4 duration-300 h-0.5 bg-less-blue float-start ${
                  openNav &&
                  "rotate-45 !w-full absolute top-1/2 -translate-y-1/2"
                }`}
              ></span>
              <span
                className={`block w-full duration-300 h-0.5 bg-less-blue ${
                  openNav && "opacity-0"
                }`}
              ></span>
              <span
                className={`block w-4 duration-300 h-0.5 bg-less-blue ms-auto ${
                  openNav &&
                  "-rotate-45 !w-full absolute top-1/2 -translate-y-1/2"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
