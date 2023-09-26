"use client";

import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full mb-8 ">
      <div className="text-gray-200 text-2xl font-bold pt-16 pb-10">
        But wait... <span className="text-secondary">Who am I ?</span>
      </div>
      <div className="lg:flex justify-center items-center gap-12">
        
        {/* left block */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="left w-full h-full mb-8"
        >
          <Image
            src="/about-me.svg"
            className=""
            width={968}
            height={500}
            alt="about-me"
          />
        </motion.div>

        {/* right block */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="right w-full space-y-8"
        >
          <div className="text-lg  text-gray-400 leading-8 space-y-6 tracking-wide ">
            <p>
              Hello, I&apos;m Pritam Gupta, a dedicated undergraduate student
              with a profound interest in web development. Currently pursuing my
              Bachelor of Computer Applications (BCA) degree, my goal is to
              master both front-end and back-end technologies, aiming to become
              a versatile and skilled developer. I thrive on the creativity and
              problem-solving that web development offers.
            </p>
            <p>
              Let&apos;s connect and exchange ideas in the dynamic world of web
              development. I&apos;m always open to new connections and exciting
              opportunities. Feel free to reach out, and let&apos;s embark on
              this journey together.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="bg-secondary px-3 py-2 mb- text-gray-200 flex items-center rounded-md hover:scale-105 hover:shadow-button duration-200"
            >
              Connect with me <LinkIcon className="h-6 w-6 ml-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
