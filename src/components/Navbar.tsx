import { FC } from "react";
import MobileNavbar from "./MobileSidebar";
import NavbarOptions from "./NavbarOptions";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="w-full max-w-[1200px] h-20 flex justify-between fixed z-40 bg-transparent">
      <div className="flex justify-start px-6 items-center text-secondary w-full h-full">
        logo
      </div>
      <div className="hidden md:block">
        <ul className="w-full h-full flex justify-center items-center gap-5 px-6 text-gray-200 font-[500] text-lg">
          <NavbarOptions/>
        </ul>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
