"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer id="footer" className="w-full border-t-[1px]">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col md:flex-row md:justify-center items-center text-gray-400 py-6 gap-3"
      >
        <p>Don&apos;t hesitate to reach out.</p>
        <p>© {currentYear} | Pritam Gupta</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
