import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <div id="footer" className="w-full">
      <div className="flex flex-col md:flex-row md:justify-center items-center text-gray-400 py-6 gap-3">
      <p>Don&apos;t hesitate to reach out.</p>
        <p>© {currentYear} | Pritam Gupta</p>
      </div>
    </div>
  );
};

export default Footer;
