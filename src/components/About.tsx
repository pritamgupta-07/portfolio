import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div id="about" className="w-full mb-8">
      <div className="text-gray-200 text-2xl font-bold pt-16 pb-10">
        But wait... <span className="text-secondary">Who am I ?</span>
      </div>
      <div className="lg:flex justify-center items-center ">
        {/* left section */}

        <div className="left w-full h-full mb-8 lg:mr-6">
          <Image src="/about-me.svg" className="" width={968} height={500} alt="about-me" />
        </div>

        {/* right section */}

        <div className="right w-full space-y-8">
          <div className="text-lg  text-gray-400 leading-8 space-y-6">
          <p>
            Hello, I&apos;m Pritam Gupta, a dedicated undergraduate student with a
            profound interest in web development. As I pursue my Bachelor of Computer Applications (BCA) degree, my
            goal is to master both front-end and back-end technologies, aiming
            to become a versatile and skilled developer.
          </p>
          <p>
            Outside of academics, I&apos;m constantly exploring new coding challenges
            and personal projects to enhance my skills. I thrive on the
            creativity and problem-solving that web development offers.
          </p>
          <p>
          Let&apos;s connect and exchange ideas in the dynamic world of web
            development. Whether you&apos;re a seasoned developer or just as
            passionate about learning, I&apos;m always open to new connections and
            exciting opportunities. Feel free to reach out, and let&apos;s embark on
            this journey together.
          </p>
          </div>
          <div>
            <button type="button" className="bg-secondary px-3 py-2 mb- text-gray-200 flex items-center rounded-md hover:scale-105 hover:shadow-button duration-200">Connect with me <LinkIcon className="h-6 w-6 ml-4"/></button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
