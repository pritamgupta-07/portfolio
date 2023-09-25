"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="flex flex-col-reverse md:flex-row  md:justify-between items-center w-full pt-28 md:pb-16"
    >
      {/* left block */}
      <div className="left w-full flex justify-start  text-gray-200 md:my-0 my-10">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="font-bold space-y-3">
            <h3 className="text-xl "> Hey Welcome!</h3>
            <h1 className="text-4xl lg:text-6xl ">
              I&apos;m <span className="text-secondary">Pritam Gupta</span>
            </h1>
            <h2 className="text-gray-400">
              Your Aspiring Fullstack Web Developer.
            </h2>
          </div>
          {/* resume download and contact button */}
          <div className="flex justify-start items-center mt-8 mb-12">
            <button className="border transition-all duration-300 hover:border-secondary mr-6 px-3 py-2 rounded-md">
              Download Resume
            </button>
            <a
              href="#projects"
              className="px-3 py-2 bg-secondary font-bold rounded-md hover:scale-110 hover:shadow-button transition-all duration-200 "
            >
              See Project
            </a>
          </div>
          {/* social media links */}
          <div className="social-media-links">
            <ul className="flex gap-6">
              <li>
                <a href="#">
                  <Image
                    width={100}
                    height={100}
                    className="w-8 h-8 transition-all duration-300 hover:drop-shadow-custom "
                    src="/linkedin.svg"
                    alt="pritam-gupta-linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={100}
                    height={100}
                    className="h-8 w-8 transition-all duration-300 hover:drop-shadow-custom "
                    src="/github.svg"
                    alt="pritam-gupta-github"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={100}
                    height={100}
                    className="h-8 w-8 transition-all duration-300 hover:drop-shadow-custom "
                    src="/twitter.svg"
                    alt="pritam-gupta-twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* right block */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="right flex  md:justify-end md:items-center justify-center w-full h-full "
      >
        <div className="bg-secondary w-full flex justify-center items-center rounded-2xl">
          <Image
            width={400}
            height={400}
            className="w-[400px] max-h-[400px] rounded-2xl"
            src="/pritam.jpg"
            alt="pritam-gupta"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
