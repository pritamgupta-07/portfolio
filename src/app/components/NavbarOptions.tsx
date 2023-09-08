import { FC } from "react";
import {
  CodeBracketIcon,
  CommandLineIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavbarOptionsProps {
    handleActiveMenu ?: ()=> void
}

const NavbarOptions: FC<NavbarOptionsProps> = ({handleActiveMenu}) => {

  return (
    <>
      <li>
        <Link href="#home" onClick={handleActiveMenu} className="flex">
          <HomeIcon className="text-secondary w-6 h-6 mr-2" />
          Home
        </Link>
      </li>
      <li>
        <Link href="#about" onClick={handleActiveMenu} className="flex">
          <UserIcon className="text-secondary w-6 h-6 mr-2" />
          About
        </Link>
      </li>
      <li>
        <Link href="#skills" onClick={handleActiveMenu} className="flex">
          <CodeBracketIcon className="text-secondary w-6 h-6 mr-2" />
          Skills
        </Link>
      </li>
      <li>
        <Link href="#projects" onClick={handleActiveMenu} className="flex">
          <CommandLineIcon className="text-secondary w-6 h-6 mr-2" />
          Projects
        </Link>
      </li>
      <li>
        <Link href="#contact" onClick={handleActiveMenu} className="flex">
          <EnvelopeIcon className="text-secondary w-6 h-6 mr-2" />
          Contact
        </Link>
      </li>
    </>
  );
};

export default NavbarOptions;
