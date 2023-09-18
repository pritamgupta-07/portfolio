import Image from "next/image";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row  md:justify-between items-center w-full pt-20"
    >
      {/* left block */}
      <div className="left w-full flex md:justify-start justify-center  text-gray-200 md:my-0 my-10">
        <div>
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
        </div>
      </div>

      {/* right block */}
      <div className="right flex  md:justify-end md:items-center justify-center w-full h-full ">

        <div className="bg-secondary w-full flex justify-center items-center">
        <Image
          width={400}
          height={400}
          className="w-[400px] max-h-[400px]"
          src="/pritam-gupta.jpg"
          alt="pritam-gupta"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
