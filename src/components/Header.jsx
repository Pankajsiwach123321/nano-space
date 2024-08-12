import React from "react";
import layer from "../assets/images/png/layer-bottom.png";
import { HEADER_SOCIAL_LIST } from "../utils/helper";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="bg-low-black">
      <div className="bg-hero bg-cover lg:min-h-[810px] min-h-[700px] flex flex-col bg-center max-w-[1920px] mx-auto lg:bg-full">
        <NavBar />
        <header className="relative z-[10] grow mt-28 lg:mt-[182px]">
          <div className="flex-grow flex items-center justify-center">
            <div className="container flex flex-col items-center justify-center">
              <div className="flex items-center justify-center flex-col">
                <h1 className="font-bold text-white max-w-[810px] text-center font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-custom-5xl !leading-[120%] mb-4">
                  Save NANOSPACE World from Enemies
                </h1>
                <p className="text-center text-white text-lg md:text-xl font-normal mb-6 md:mb-[46px] font-saira !leading-[150%]">
                  Unleash ever-existing excitement with adorable girls armed
                  with destructive gunfire.
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  {HEADER_SOCIAL_LIST.map((obj, i) => (
                    <a
                      key={i}
                      target="_blank"
                      className="group"
                      rel="noopener noreferrer"
                      href={obj.url}
                    >
                      <img
                        className="w-[118px] h-[35px] group-hover:scale-95 duration-300"
                        src={obj.image}
                        alt="socail links"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <img
            src={layer}
            alt="layer"
            className="w-full -z-10 absolute bottom-0 translate-y-[62%] pointer-events-none"
          />
        </header>
      </div>
    </div>
  );
};

export default Header;
