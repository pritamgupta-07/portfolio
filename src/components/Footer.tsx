const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

  return (
    <footer id="footer" className="w-full border-t-[1px]">
      <div className="flex flex-col md:flex-row md:justify-center items-center text-gray-400 py-6 gap-3">
      <p>Don&apos;t hesitate to reach out.</p>
        <p>© {currentYear} | Pritam Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
