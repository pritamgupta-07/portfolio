"use client";

import { FC, useEffect, useState } from "react";
import {
  CodeBracketIcon,
  CommandLineIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface NavbarOptionsProps {
  handleActiveMenu?: () => void;
}

const NavbarOptions: FC<NavbarOptionsProps> = ({ handleActiveMenu }) => {
  const [hash, setHash] = useState("");
  // const url = window.location.href;
 useEffect(()=>{
  if (typeof window !== "undefined") {
  window.addEventListener("hashchange", () => {
    setHash(window.location.hash)
  });
}
},[setHash])
console.log(hash);
  return (
    <>
      <li>
        <div className="group">
          <a href="#home" onClick={handleActiveMenu} className="flex">
            <HomeIcon className="text-secondary w-6 h-6 mr-2" />
            Home
          </a>
          <div className="h-[2px] scale-y-75 bg-secondary rounded-md scale-x-0 origin-left duration-300 group-hover:scale-x-100"></div>
        </div>
      </li>
      <li>
        <div className="group">
          <a href="#about" onClick={handleActiveMenu} className="flex">
            <UserIcon className="text-secondary w-6 h-6 mr-2" />
            About
          </a>
          <div className="h-[2px] scale-y-75 bg-secondary scale-x-0 rounded-md origin-left duration-300 group-hover:scale-x-100"></div>
        </div>
      </li>
      <li>
        <div className="group h-full">
          <a href="#skills" onClick={handleActiveMenu} className="flex">
            <CodeBracketIcon className="text-secondary w-6 h-6 mr-2" />
            Skills
          </a>
          <div className="h-[2px] scale-y-75 bg-secondary rounded-md scale-x-0 origin-left duration-300 group-hover:scale-x-100"></div>
        </div>
      </li>
      <li>
        <div className="group">
          <a href="#projects" onClick={handleActiveMenu} className="flex">
            <CommandLineIcon className="text-secondary w-6 h-6 mr-2" />
            Projects
          </a>
          <div className="h-[2px] scale-y-75 bg-secondary scale-x-0 rounded-md origin-left duration-300 group-hover:scale-x-100"></div>
        </div>
      </li>
      <li>
        <a
          href="#contact"
          onClick={handleActiveMenu}
          className="flex md:bg-secondary md:rounded-md transition-all duration-200 md:hover:scale-105 md:px-3 md:py-2"
        >
          <EnvelopeIcon className="text-secondary md:text-white w-6 h-6 mr-2" />
          Contact
        </a>
      </li>
    </>
  );
};

export default NavbarOptions;
