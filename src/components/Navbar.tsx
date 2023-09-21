import MobileNavbar from "./MobileSidebar";
import NavbarOptions from "./NavbarOptions";

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1340px] h-20 flex justify-between fixed z-40 bg-transparent px-6 md:px-8">
      <div className="flex justify-start items-center text-secondary w-full h-full font-[700] text-2xl">
        PG
      </div>
      <div className="hidden lg:block">
        <ul className="w-full h-full flex justify-center items-center gap-6 text-gray-200 font-[400] text-lg">
          <NavbarOptions/>
        </ul>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
