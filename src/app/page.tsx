import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { FC } from "react";
import Image from "next/image";
import About from "../components/About";
import Projects from "@/components/Projects";

interface Home {}

const Home: FC<Home> = () => {
  return (
    <main className="h-full w-full px-6">
      <div id="home" className="flex flex-col-reverse md:flex-row  md:justify-between items-center min-w-full min-h-full">
        {/* left block */}
        <div className="left w-[400px] text-gray-200 md:my-0 my-10">
          <div className="text-2xl leading-normal font-bold">
            <h3>Hey there!</h3>
            <h1>
              I&apos;m <span className="text-secondary">Pritam Gupta</span> ,
            </h1>
            <h2> Fullstack Web Developer.</h2>
          </div>
          {/* resume download and contact button */}
          <div className="flex justify-start items-center my-8">
            <button className="border transition-all duration-300 hover:border-secondary mr-6 px-3 py-2 rounded-md">
              Download Resume
            </button>
            <button className="px-3 py-2 bg-secondary font-bold rounded-md hover:scale-110 hover:shadow-button transition-all duration-200 ">
              Get in Touch
            </button>
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
                    alt="pritam-gupta"
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
                    alt="pritam-gupta"
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
                    alt="pritam-gupta"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* right block */}
        <div className="right pt-20">
          <Image
            width={400}
            height={400}
            className="w-[400px] h-[380px] "
            src="/mock-profile-photo.jpg"
            alt="pritam-gupta"
          />
        </div>
      </div>

      {/* Projects section */}

      <Projects/>

      {/* About section */}
      <About/>
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
