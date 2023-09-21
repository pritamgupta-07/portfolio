"use client";

import { FC, useState } from "react";
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
  const [hash, setHash] = useState<string>("#home");

  const activeNav = (active: string) => {
    if (handleActiveMenu) {
      handleActiveMenu();
    }

    setHash(active);
  };

  return (
    <>
      <li>
        <div className="group">
          <a href="#home" onClick={() => activeNav("#home")} className="flex">
            <HomeIcon className="text-secondary w-6 h-6 mr-2" />
            Home
          </a>
          <div
            className={`lg:active-nav ${
              hash === "#home" ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </div>
      </li>
      <li>
        <div className="group">
          <a
            href="#projects"
            onClick={() => activeNav("#projects")}
            className="flex"
          >
            <CommandLineIcon className="text-secondary w-6 h-6 mr-2" />
            Projects
          </a>
          <div
            className={`lg:active-nav ${
              hash === "#projects" ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </div>
      </li>
      <li>
        <div className="group h-full">
          <a
            href="#skills"
            onClick={() => activeNav("#skills")}
            className="flex"
          >
            <CodeBracketIcon className="text-secondary w-6 h-6 mr-2" />
            Skills
          </a>
          <div
            className={`lg:active-nav ${
              hash === "#skills" ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </div>
      </li>
      <li>
        <div className="group">
          <a href="#about" onClick={() => activeNav("#about")} className="flex">
            <UserIcon className="text-secondary w-6 h-6 mr-2" />
            About
          </a>
          <div
            className={`lg:active-nav ${
              hash === "#about" ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </div>
      </li>
      <li>
        <div className="group">
          <a
            href="#contact"
            onClick={() => activeNav("#contact")}
            className="flex lg:bg-secondary lg:rounded-md transition-all duration-200 lg:hover:scale-105 lg:px-3 lg:py-2"
          >
            <EnvelopeIcon className="text-secondary lg:text-white w-6 h-6 mr-2" />
            Contact
          </a>
          <div
            className={`lg:active-nav md:hidden ${
              hash === "#contact" ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </div>
      </li>
    </>
  );
};

export default NavbarOptions;
